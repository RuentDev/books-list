import Components from "@/components";

import books from '@/data/books.json'


export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="books relative w-full h-full md:px-40">
        <div className="title-container border-b-2 border-primaryColor">
          <h1 className="title text-center text-[55px] font-extrabold font-serif">Book <span className="text-primaryColor">Website</span></h1>
        </div>
        <Components.Books 
          books={books}
        />
      </section>
    </main>
  );
}
