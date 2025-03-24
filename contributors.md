---
layout: page
title: Contributors
permalink: /contributors/
---

{% assign contributors = "first_last, other_writer" | split: "," %}

{% for contributor in contributors %}
## {{ contributor | replace: "_", " " | split: " " | map: "capitalize" | join: " " }} ← raw

<ul>
  {% for post in site.posts %}
    {% if post.categories contains contributor %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%B %d, %Y" }}
      </li>
    {% endif %}
  {% endfor %}
</ul>

{% endfor %}
