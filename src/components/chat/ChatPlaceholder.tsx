import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">Rafaeller GPT</h1>
        <p className="mt-4 text-lg">
          Aqui você pode usar o ChatGPT a vontade com sua propria chave da OpenAI!
        </p>
        <div className="m-4 flex items-center justify-center">
          <AddTokenModal />
        </div>
        <p className="mt-4 text-lg">
          Quer mais poder? experimente o{" "}
          <Link
            href="/playground"
            className="font-medium text-primary hover:underline"
          >
            Playground
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
