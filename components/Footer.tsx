// Copyright © 2022 Dpm Land. All Rights Reserved.

/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

const LINKS = [
  {
    title: 'Source Code',
    href: 'https://github.com/dpmland/web/tree/dev',
  },
  {
    title: 'License',
    href: 'https://github.com/dpmland/web/blob/dev/LICENSE',
  },
];

export default function Footer(): h.JSX.Element {
  return (
    <footer class={tw`flex justify-around bg-gray-100 mt-4`}>
      <section class=''>
        {LINKS.map((link) => (
          <a href={link.href} class={tw`m-3`}>
            {link.title}
          </a>
        ))}
      </section>
      <section class='text(gray-100 center)'>
        <span>© {new Date().getFullYear()} Dpm Land</span>
      </section>
    </footer>
  );
}
