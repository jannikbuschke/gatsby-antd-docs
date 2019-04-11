# Gatsby-Antd-Docs

fork of https://github.com/cvluca/gatsby-starter-markdown

# Getting started

```
npm install gatsby -g
gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs
cd my-docs
npm run start
visit http://localhost:8000
start editing content in content/docs
```

# Roadmap

- [x] Add typescript
- [x] Remove Redux
- [x] General simplifications
- [ ] Host sample
- [ ] Add starter to gatsby starter repository
- [ ] Add mdx
- [ ] Restore blog feature
- [ ] Improve Header UI
- [ ] Improve typings

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```
npm run build
```

and copy the content of the public folder to the webspace.
