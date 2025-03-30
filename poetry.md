---
layout: page
title: Poetry
category: poetry
permalink: /poetry/
---
{% assign poetry_posts = site.posts | where_exp: "post", "post.categories contains 'poetry'" %}

<ul>
  {% for post in poetry_posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
