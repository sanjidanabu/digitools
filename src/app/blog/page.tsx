
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}


const DUMMY_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Next.js 15 App Router & Strict TypeScript',
    excerpt: 'Learn the best architectures to safely structure your enterprise scale Next.js platforms without production compiler failures.',
    category: 'Development',
    date: 'July 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'Why Tailwind CSS Utility Classes Speed Up UX Design Workflow',
    excerpt: 'Stop writing standard vanilla styles. Discover how fluid utility tokens help prototype mobile-first layouts instantly.',
    category: 'Design Systems',
    date: 'July 08, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Securing Fullstack MongoDB Connections via Better-Auth Middleware',
    excerpt: 'Prevent runtime database crashes and stale server handshakes using production grade secure authentication hooks.',
    category: 'Backend Security',
    date: 'July 02, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
               <div className="mb-12 text-center sm:text-left">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
            Resource Engineering Journal
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5">
            Deep dives into modern frontend logic, UI structures, and ecosystem updates.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DUMMY_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
             
              <div className="h-44 w-full bg-gray-100 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                    <span>{post.category}</span>
                    <span className="text-gray-400 font-normal">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-base font-black text-gray-900 mt-3 leading-snug line-clamp-2 hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

               
                <div className="flex items-center justify-between pt-4 mt-5 border-t border-gray-50 text-[11px] text-gray-400 font-medium">
                  <span>{post.date}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-gray-900 font-bold hover:text-indigo-600 transition-colors flex items-center gap-0.5"
                  >
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}