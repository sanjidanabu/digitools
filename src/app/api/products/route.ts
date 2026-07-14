
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '8');
    const search = searchParams.get('search') || '';

    const client = await clientPromise;
    const db = client.db('digitools_db');
    const collection = db.collection('products');

   
    const query = search 
      ? { 
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } }
          ] 
        } 
      : {};

    const skip = (page - 1) * limit;
    const products = await collection.find(query).skip(skip).limit(limit).toArray();
    
    const totalItems = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    return NextResponse.json({ products, currentPage: page, totalPages, totalItems });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, price, description, image } = body;

    if (!title || !category || !price) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('digitools_db');
    const collection = db.collection('products');

    const newProduct = {
      title,
      category,
      price: parseFloat(price),
      description: description || 'Premium digital resource template.',
      image: image || '',
      rating: 4.7,
      sales: 12,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newProduct);
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
  }
}

