---
layout: category
title: Fiction
category: fiction
permalink: /fiction/
---
{% assign fiction_posts = site.posts | where_exp: "post", "post.categories contains 'fiction'" %}

<ul>
  {% for post in fiction_posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
