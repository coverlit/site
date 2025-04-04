---
layout: page
title: Contributors
permalink: /contributors/
---

{% assign contributors = "james_tadd_adcox,daniel_bailey,maddie_baxter,jack_bedell,ellen_boyette,t_r_brady,laynie_browne,chelsea_bunn,tetman_callis,kenneth_cale,lauren_camp,laton_carter,laura_carter,will_cordiero,andrew_cothren,jose_hernandez_diaz,jon_doughboy,gabe_durham,sean_ennis,connor_fisher,katherine_gibbel,andrew_gibson,suzanne_gold,ivy_grimes,adam_jeffrey_jr,david_s_maduli,daniel_miller,christina_m_rau" | split: "," %}

{% for contributor in contributors %}
  {% assign parts = contributor | split: "_" %}
  {% assign name = "" %}
  {% assign slug = contributor %}

  {% for part in parts %}
    {% assign capitalized = part | capitalize %}
    {% assign name = name | append: capitalized %}
    {% unless forloop.last %}
      {% assign name = name | append: " " %}
    {% endunless %}
  {% endfor %}

## {{ name }}

<ul>
  {% assign has_posts = false %}
  {% for post in site.posts %}
    {% if post.categories contains slug %}
      {% assign has_posts = true %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%B %d, %Y" }}
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% unless has_posts %}
_No posts yet._
{% endunless %}

{% endfor %}
