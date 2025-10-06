// Headline rotation
const headlines = [
  "Beware - the Wicked Witch of the West returns to the Western Woods",
  "Emerald City to host a Festival of Lights this weekend",
  "Glinda announces new scholarship for aspiring magic-users",
  "Mysterious relics discovered beneath the Crystal Palace"
];
let hi = 0;
const breakingEl = document.getElementById('breaking');
if(breakingEl){
  setInterval(()=>{
    hi = (hi+1) % headlines.length;
    breakingEl.style.opacity = 0;
    setTimeout(()=>{ breakingEl.textContent = 'Breaking: ' + headlines[hi]; breakingEl.style.opacity = 1; }, 400);
  }, 4500);
}

// Nav toggle for mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', ()=>{
    mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
  });
}

// Populate sample articles dynamically
const sampleArticles = [
  {title: "The Wicked Witch of the West Returns", content: "Mysterious green lightning storms have been seen above the Western Woods. Fear spreads among local farmers. The council promises an update."},
  {title: "Emerald City Renovation Completed", content: "Mayor Boq unveils the newly renovated Emerald Plaza, featuring enchanted fountains and crystal benches."},
  {title: "Yellow Brick Road Reopening", content: "After months of repairs, the Yellow Brick Road reopens. Residents celebrate with music and street theatre."},
  {title: "Scholars Find Ancient Scrolls", content: "Archaeologists discovered scrolls beneath the Crystal Palace containing unfamiliar runes."}
];
const articlesEl = document.getElementById('articles');
if(articlesEl){
  sampleArticles.forEach(a=>{
    const art = document.createElement('article');
    art.innerHTML = `<h2>${a.title}</h2><p>${a.content}</p>`;
    articlesEl.appendChild(art);
  });
}

// Modal for product previews
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
document.querySelectorAll('.btn[data-product]').forEach(b=>{
  b.addEventListener('click', ()=>{
    const p = b.dataset.product;
    modalTitle.textContent = p;
    modalBody.textContent = p + ' — A curated item from the Emerald Emporium. Magnificent quality, limited stock.';
    modal.classList.remove('hidden');
  });
});
if(modalClose) modalClose.addEventListener('click', ()=> modal.classList.add('hidden'));

// Demo login handling (client-side only)
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    // demo credentials: editor / emerald (or stored custom)
    const storedPass = localStorage.getItem('oz_admin_pass') || 'emerald';
    if(u==='editor' && p===storedPass){
      localStorage.setItem('isAdmin','1');
      window.location.href = 'admin/admin.html';
    } else {
      alert('Wrong credentials. Try editor / emerald (demo).');
    }
  });
}

// Simple localStorage store for admin pages
function refreshUsers(){
  const ul = document.getElementById('userList');
  if(!ul) return;
  const users = JSON.parse(localStorage.getItem('oz_users')||'[]');
  ul.innerHTML = users.length ? users.map(u=>' <div class="admin-card"><strong>'+u.name+'</strong><br/>'+u.email+'</div>').join('') : '<p>No users yet</p>';
  document.getElementById('statUsers') && (document.getElementById('statUsers').textContent = users.length);
}
function refreshProducts(){
  const pl = document.getElementById('productList');
  if(!pl) return;
  const products = JSON.parse(localStorage.getItem('oz_products')||'[]');
  pl.innerHTML = products.length ? products.map(p=>' <div class="admin-card"><strong>'+p.name+'</strong><br/>'+p.desc+'</div>').join('') : '<p>No products yet</p>';
  document.getElementById('shopItems') && (document.getElementById('shopItems').innerHTML = products.map(p=>'<article class="product"><h4>'+p.name+'</h4><p>'+p.desc+'</p></article>').join(''));
  document.getElementById('statArticles') && (document.getElementById('statArticles').textContent = products.length + ' items');
}
const userAddForm = document.getElementById('userAddForm');
if(userAddForm){
  userAddForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('u_name').value;
    const email = document.getElementById('u_email').value;
    const users = JSON.parse(localStorage.getItem('oz_users')||'[]');
    users.push({name, email});
    localStorage.setItem('oz_users', JSON.stringify(users));
    refreshUsers();
    userAddForm.reset();
  });
}
const productAddForm = document.getElementById('productAddForm');
if(productAddForm){
  productAddForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('p_name').value;
    const desc = document.getElementById('p_desc').value;
    const products = JSON.parse(localStorage.getItem('oz_products')||'[]');
    products.push({name, desc});
    localStorage.setItem('oz_products', JSON.stringify(products));
    refreshProducts();
    productAddForm.reset();
  });
}
const passwordForm = document.getElementById('passwordForm');
if(passwordForm){
  passwordForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newp = document.getElementById('newPass').value;
    localStorage.setItem('oz_admin_pass', newp);
    alert('Password changed (demo only).');
    passwordForm.reset();
  });
}

refreshUsers();
refreshProducts();
