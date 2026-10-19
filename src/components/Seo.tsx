import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
}) => {
  useEffect(() => {
    const head = document.head;
    const siteUrl = 'https://domence-o9s1.vercel.app';

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical || siteUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (ogImage) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }

    if (canonical) {
      setLink('canonical', canonical);
    }

    if (noindex) {
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    }

    return () => {
      head.querySelectorAll('meta[data-seo="true"]').forEach((el) => el.remove());
    };
  }, [title, description, canonical, ogImage, ogType, noindex]);

  return null;
};
