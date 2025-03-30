---
layout: page
title: Contributors
permalink: /contributors/
---

{% assign contributors = "first_last,other_writer,christina_m_rau,jon_doughboy,ivy_grimes" | split: "," %}

{% for contributor in contributors %}
  {% assign parts = contributor | split: "_" %}
  {% assign first = parts[0] | capitalize %}
  {% assign last = parts[1] | capitalize %}
## {{ first }} {{ last }}

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
