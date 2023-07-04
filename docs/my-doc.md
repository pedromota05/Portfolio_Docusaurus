---
id: my-doc-id
title: Teste para teste
description: My document description
slug: /teste
---

## Markdown heading

### Acesse o links e veja mais informações:

Markdown text with [links](./hello.md)

Let's see how to [Create a page](/my-react-page).

![Docusaurus logo](/img/docusaurus.png)

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

:::danger Take care

Teste para teste

:::

___ 

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '15px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> **!**

This is <Highlight color="#1877F2">Facebook blue</Highlight> **!**