---
layout: page
title: Contributors
permalink: /contributors/
---

{% assign contributors = "jack_bedell,laynie_browne,lauren_camp,andrew_cothren,jon_doughboy,gabe_durham,sean_ennis,ivy_grimes,daniel_miller,christina_rau" | split: "," %}

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
