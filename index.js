import{a as c,S as m,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="28034185-32b171efe234d6a5f1d0d21a7";c.defaults.baseURL="https://pixabay.com/api/";function y(s){return c.get("",{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery"),p=document.querySelector("#loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${d}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML=""}function v(){p.classList.add("loader--visible")}function l(){p.classList.remove("loader--visible")}const S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();const r=s.target["search-text"].value.trim();L(),v(),y(r).then(o=>{if(l(),o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{l(),n.error({message:"Something went wrong. Please try again.",position:"topRight"}),console.log(o)})});
//# sourceMappingURL=index.js.map
