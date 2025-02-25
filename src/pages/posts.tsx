
import { title } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";

import  PostList  from "@/components/PostList";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Tabla&nbsp;</span>
          <span className={title({ color: "violet" })}>Posts&nbsp;</span>
          <br />
        </div>
      </section>
      <PostList />
    </DefaultLayout>
  );
}
