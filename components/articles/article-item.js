import Image from "next/image";
import Link from "next/link";

export default function ArticleItem({ article }) {
  const { alt } = article;
  const excerpt = alt.substring(0, 100);
  return (
    <Link href={`/articles/${article.id}`}>
      <div className="shadow-lg rounded-lg cursor-pointer m-auto p-5 hover:bg-blue-300 hover:border-transparent hover:shadow-xl">
        <div className="relative h-72">
          <Image
            className="rounded-lg"
            src={article.image}
            alt={article.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
        </div>
        <div className="dark:bg-gray-800 w-full p-1">
          <p className="text-gray-800 dark:text-white text-md font-medium mb-2 h-40 flex items-center">
            {article.title}
          </p>
          {/* <p className="text-gray-400 dark:text-white text-md font-light mb-2 h-36">
            {excerpt.length < alt.length ? excerpt + "..." : excerpt}
          </p> */}
        </div>
      </div>
    </Link>
  );
}
