import Link from 'next/link';
import Image from 'next/image'
import styles from './Button.module.css';

function table() {
  return (
<section className="bg-white dark:bg-gray-900">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <Image
      className="w-full dark:hidden"
      src="/slb.png"
      alt="雙龍職棒"
    />
    <Image
      className="w-full hidden dark:block"
      src="/slb.png"
      alt="雙龍職棒"
    />
    <div className="mt-4 md:mt-0">
      <h2 className={`mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white `}>
        雙龍
                    <span className={styles.aabc}>職棒</span>
      </h2>
      <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
       棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
      </p>
      <a
        href="https://slb.ssangyongsports.org/"
        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
      >
        更多資訊
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

 )
}

export default table;
