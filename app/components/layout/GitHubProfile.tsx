import { githubName } from "@/app/constants/githubName";
import { githubUrl } from "@/app/constants/githubUrl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubProfile = () => {
  return (
    <header
      className="flex flex-col items-center justify-between p-8 container
                      sm:py-12 md:py-16 lg:py-24 xl:py-32
                      sm:flex-row sm:items-start"
    >
      <div className="flex flex-col gap-4 mb-8 sm:mb-0">
        <h1
          className="text-4xl font-bold tracking-tighter
                       sm:text-5xl md:text-6xl lg:text-7xl"
        >
          はじめまして！
        </h1>
        <p className="max-w-[600px] text-sm md:text-base lg:text-xl mr-2 mb-8 text-gray-500 whitespace-pre-wrapmx-auto leading-loose">
          Web系エンジニアです。このサイトでは今まで作った作品とブログ記事を投稿しています。好きな言語はTypeScriptです！
        </p>
        <div className="flex">
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
              <span>View My GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <Image
          src="/images/profile.png"
          alt="GitHubProfile"
          width={500}
          height={500}
          priority
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        />
        <Link
          href={`https://github.com/${githubName}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className="text-sm sm:text-base"
        >
          @{githubName}
          <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
        </Link>
      </div>
    </header>
  );
};

export default GitHubProfile;
