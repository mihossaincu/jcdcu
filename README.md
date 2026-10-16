# বাংলাদেশ জাতীয়তাবাদি ছাত্রদল - চট্টগ্রাম বিশ্ববিদ্যালয়  – Official Website

মডুলার স্ট্রাকচারে তৈরি আধুনিক, রেসপন্সিভ ওয়েবসাইট।

## ফোল্ডার স্ট্রাকচার

```
cu-chhatradal/
├── index.html          ← মূল HTML ফাইল
├── css/
│   └── style.css       ← সব স্টাইল
├── js/
│   ├── main.js         ← স্লাইডার, সার্চ, ফর্ম ইত্যাদি
│   └── loader.js       ← সেকশনগুলো ডাইনামিক লোড করে
├── sections/           ← প্রতিটি সেকশন আলাদা HTML
│   ├── hero.html
│   ├── vision.html
│   ├── leadership.html
│   ├── intro.html
│   ├── about.html
│   ├── news.html
│   ├── welfare.html
│   ├── gallery.html
│   ├── join.html
│   ├── contact.html
│   └── footer.html
├── assets/             ← লোগো, ছবি ইত্যাদি রাখুন
└── README.md
```

## কিভাবে চালাবেন

1. পুরো ফোল্ডারটি একটি লোকাল সার্ভারে চালান (Live Server / Netlify / Vercel / GitHub Pages)।
2. সরাসরি `index.html` ডাবল-ক্লিক করলে `fetch` কাজ নাও করতে পারে (CORS)। তাই লোকাল সার্ভার ব্যবহার করুন।

### VS Code এ সহজে:
- Live Server এক্সটেনশন ইনস্টল করুন
- `index.html` এ রাইট-ক্লিক → Open with Live Server

### Netlify এ ডিপ্লয়:
- পুরো ফোল্ডার zip করে Netlify-তে Drag & Drop করুন অথবা Git রিপো কানেক্ট করুন।

## সেকশন সম্পাদনা

প্রতিটি সেকশন `sections/` ফোল্ডারে আলাদা ফাইলে আছে। যেকোনো সেকশন এডিট করতে শুধু সেই HTML ফাইল খুলে পরিবর্তন করুন। `loader.js` স্বয়ংক্রিয়ভাবে লোড করবে।

## কাস্টমাইজেশন

- নাম, ছবি, কমিটি তালিকা → `sections/about.html`
- নিউজ → `sections/news.html`
- রক্তদাতা → `sections/welfare.html`
- কালার → `css/style.css` এর `:root` ভেরিয়েবল

## নিরাপত্তা পরামর্শ

- SSL Certificate ব্যবহার করুন
- Cloudflare দিয়ে DDoS Protection দিন
- ফর্মের জন্য Formspree / Firebase / নিজস্ব ব্যাকএন্ড ব্যবহার করুন
- অ্যাডমিন প্যানেলের জন্য WordPress বা কাস্টম ড্যাশবোর্ড যোগ করুন

---
© ২০২৬ চট্টগ্রাম বিশ্ববিদ্যালয় ছাত্রদল
