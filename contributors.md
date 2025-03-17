---
layout: page
title: Contributors
permalink: /contributors/
---

# Contributors

{% assign contributors = "hanna_shea, ryan_shea" | split: ", " %}

{% for contributor in contributors %}
## {{ contributor | replace: "_", " " | capitalize }}

<ul>
  {% for post in site.posts %}
    {% if post.categories contains contributor %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
      </li>
    {% endif %}
  {% endfor %}
</ul>

{% endfor %}
