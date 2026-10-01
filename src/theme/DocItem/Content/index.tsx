import type {ReactNode} from 'react';
import {useState} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  const slug = metadata.permalink.replace(/^\/|\/$/g, '');
  const markdownUrl = useBaseUrl(slug ? `/${slug}.md` : '/index.md');
  const [copied, setCopied] = useState(false);

  async function copyMarkdown() {
    const response = await fetch(markdownUrl);
    await navigator.clipboard.writeText(await response.text());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Head>
        <link rel="alternate" type="text/markdown" href={markdownUrl} />
      </Head>
      <div className={styles.actions}>
        <button type="button" onClick={copyMarkdown}>
          {copied ? 'Copied' : 'Copy as Markdown'}
        </button>
        <a href={markdownUrl} target="_blank" rel="noopener noreferrer">
          View Markdown
        </a>
        <a href={markdownUrl} download>
          Download .md
        </a>
      </div>
      <Content {...props} />
    </>
  );
}
