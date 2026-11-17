const drivers = [
  { name: "Thabo Mokoena", initials: "TM", role: "Van driver", vehicle: "VAN-204", status: "On route", tone: "", deliveries: 8, time: "07:42 AM" },
  { name: "Naledi Nkosi", initials: "NN", role: "Van driver", vehicle: "VAN-189", status: "On route", tone: "", deliveries: 6, time: "07:38 AM" },
  { name: "Sipho Dlamini", initials: "SD", role: "Truck driver", vehicle: "TRK-042", status: "On route", tone: "", deliveries: 11, time: "07:31 AM" },
  { name: "Lerato Khumalo", initials: "LK", role: "Van driver", vehicle: "VAN-156", status: "Available", tone: "blue", deliveries: 0, time: "08:05 AM" },
  { name: "Pieter van der Merwe", initials: "PM", role: "Truck driver", vehicle: "TRK-028", status: "On break", tone: "orange", deliveries: 5, time: "08:12 AM" },
  { name: "Zanele Ndlovu", initials: "ZN", role: "Van driver", vehicle: "VAN-172", status: "Available", tone: "purple", deliveries: 0, time: "08:16 AM" }
];
const vehicles = [
  { id: "VAN-204", model: "Ford Transit · 2022", driver: "Thabo Mokoena", initials: "TM", status: "On route", tone: "", location: "Downtown, Portland", fuel: 78, service: "12 days" },
  { id: "VAN-189", model: "Mercedes Sprinter · 2023", driver: "Naledi Nkosi", initials: "NN", status: "On route", tone: "", location: "Pearl District, Portland", fuel: 64, service: "28 days" },
  { id: "TRK-042", model: "Isuzu NPR · 2021", driver: "Sipho Dlamini", initials: "SD", status: "On route", tone: "", location: "East Portland, Portland", fuel: 41, service: "5 days" },
  { id: "VAN-156", model: "Ford Transit · 2023", driver: "Lerato Khumalo", initials: "LK", status: "Available", tone: "blue", location: "Fleet depot", fuel: 91, service: "34 days" },
  { id: "TRK-028", model: "Hino 195 · 2020", driver: "Pieter van der Merwe", initials: "PM", status: "On break", tone: "orange", location: "NW 23rd Ave, Portland", fuel: 32, service: "Overdue" },
  { id: "VAN-172", model: "Mercedes Sprinter · 2022", driver: "Zanele Ndlovu", initials: "ZN", status: "Available", tone: "purple", location: "Fleet depot", fuel: 85, service: "19 days" }
];
const deliveries = [
  { id: "DLV-2841", customer: "Olivia Martin", initials: "OM", address: "1428 NW Everett St, Portland", driver: "Thabo Mokoena", window: "9:00 – 11:00 AM", status: "In transit", tone: "", progress: 72 },
  { id: "DLV-2840", customer: "The Greenhouse Co.", initials: "GC", address: "638 SE Belmont St, Portland", driver: "Naledi Nkosi", window: "9:30 – 11:30 AM", status: "In transit", tone: "", progress: 58 },
  { id: "DLV-2839", customer: "James Washington", initials: "JW", address: "2250 NE Alberta St, Portland", driver: "Sipho Dlamini", window: "10:00 – 12:00 PM", status: "In transit", tone: "", progress: 44 },
  { id: "DLV-2838", customer: "Gather & Flourish", initials: "GF", address: "901 SW Morrison St, Portland", driver: "Thabo Mokoena", window: "8:00 – 10:00 AM", status: "Delivered", tone: "blue", progress: 100 },
  { id: "DLV-2837", customer: "Henry & Sons Market", initials: "HM", address: "3212 SE Hawthorne Blvd, Portland", driver: "Naledi Nkosi", window: "8:30 – 10:30 AM", status: "Delivered", tone: "blue", progress: 100 },
  { id: "DLV-2836", customer: "Rose City Coffee", initials: "RC", address: "1105 N Shaver St, Portland", driver: "Sipho Dlamini", window: "9:00 – 11:00 AM", status: "Pending", tone: "warning", progress: 0 },
  { id: "DLV-2835", customer: "Mason Lee", initials: "ML", address: "4810 NE Sandy Blvd, Portland", driver: "Pieter van der Merwe", window: "10:30 – 12:30 PM", status: "Pending", tone: "warning", progress: 0 }
];
const maintenance = [
  { vehicle: "TRK-028", model: "Hino 195 · 2020", service: "Oil change & inspection", due: "Overdue by 2 days", tone: "danger", cost: "R 285", priority: "High" },
  { vehicle: "TRK-042", model: "Isuzu NPR · 2021", service: "Tire rotation", due: "Due in 5 days", tone: "warning", cost: "R 160", priority: "Medium" },
  { vehicle: "VAN-204", model: "Ford Transit · 2022", service: "Brake inspection", due: "Due in 12 days", tone: "warning", cost: "R 220", priority: "Medium" },
  { vehicle: "VAN-189", model: "Mercedes Sprinter · 2023", service: "Routine service", due: "Due in 28 days", tone: "blue", cost: "R 340", priority: "Low" },
  { vehicle: "VAN-172", model: "Mercedes Sprinter · 2022", service: "Air filter replacement", due: "Completed Oct 20", tone: "", cost: "R 85", priority: "Complete" }
];
const fuelEntries = [
  { date: "Oct 24, 2024", vehicle: "VAN-204", driver: "Thabo Mokoena", station: "Shell · NW Vaughn St", gallons: "18.4 gal", cost: "R 71.58", economy: "18.2 mpg" },
  { date: "Oct 24, 2024", vehicle: "TRK-042", driver: "Sipho Dlamini", station: "Chevron · SE Powell Blvd", gallons: "26.1 gal", cost: "R 104.40", economy: "12.8 mpg" },
  { date: "Oct 23, 2024", vehicle: "VAN-189", driver: "Naledi Nkosi", station: "76 · N Lombard St", gallons: "16.8 gal", cost: "R 64.18", economy: "20.1 mpg" },
  { date: "Oct 23, 2024", vehicle: "VAN-156", driver: "Lerato Khumalo", station: "Shell · Airport Way", gallons: "17.3 gal", cost: "R 66.53", economy: "19.4 mpg" },
  { date: "Oct 22, 2024", vehicle: "TRK-028", driver: "Pieter van der Merwe", station: "Chevron · SE Powell Blvd", gallons: "28.6 gal", cost: "R 114.40", economy: "11.6 mpg" }
];
const activity = [
  { initials: "TM", tone: "", title: "Thabo Mokoena completed a delivery", detail: "DLV-2838 · Gather & Flourish", time: "2 min ago" },
  { initials: "NN", tone: "orange", title: "Naledi Nkosi started a route", detail: "6 deliveries · Route #RT-089", time: "8 min ago" },
  { initials: "SD", tone: "blue", title: "Sipho Dlamini uploaded a receipt", detail: "Fuel · TRK-042 · R 104.40", time: "18 min ago" },
  { initials: "PM", tone: "purple", title: "Maintenance reminder", detail: "TRK-028 is overdue for service", time: "32 min ago" }
];

let currentView = "Overview";
let searchTerm = "";
let toastTimer;
const page = document.getElementById("page-content");
const statusClass = tone => tone ? `status ${tone}` : "status";
const avatar = (initials, tone = "") => `<span class="person-avatar ${tone}">${initials}</span>`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

function heading(kicker, title, subtitle, actions = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p class="heading-subtitle">${subtitle}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function metric(label, value, note, change, icon, tone = "") {
  return `<article class="metric-card"><div class="metric-top"><span>${label}</span><span class="metric-icon ${tone}">${icon}</span></div><div class="metric-value">${value}</div><div class="metric-foot"><span class="metric-change">${change}</span>${note}</div></article>`;
}
function panelHeader(title, caption = "", action = "") {
  return `<div class="panel-header"><div><h2 class="panel-title">${title}</h2>${caption ? `<p class="panel-caption">${caption}</p>` : ""}</div>${action}</div>`;
}
function filtered(items, fields) {
  if (!searchTerm) return items;
  const term = searchTerm.toLowerCase();
  return items.filter(item => fields.some(field => String(item[field] || "").toLowerCase().includes(term)));
}
function deliveryTable(items, compact = false) {
  if (!items.length) return `<div class="empty-state">No deliveries match your search.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Delivery</th><th>Customer</th><th>Driver</th><th>Time window</th><th>Status</th>${compact ? "" : "<th>Progress</th><th></th>"}</tr></thead><tbody>${items.map(item => `<tr class="record-row"><td class="table-main">${escapeHTML(item.id)}</td><td><div class="person-cell">${avatar(escapeHTML(item.initials))}<span><span class="table-main">${escapeHTML(item.customer)}</span><div class="table-sub">${escapeHTML(item.address)}</div></span></div></td><td>${escapeHTML(item.driver)}</td><td>${escapeHTML(item.window)}</td><td><span class="${statusClass(item.tone)}">${escapeHTML(item.status)}</span></td>${compact ? "" : `<td><span class="delivery-progress"><span class="progress-track"><i class="progress-fill" style="width:${item.progress}%"></i></span>${item.progress}%</span></td><td>${item.status !== "Delivered" ? `<button class="table-action" data-deliver="${escapeHTML(item.id)}">Confirm</button>` : `<span class="table-sub">Signed ✓</span>`}</td>`}</tr>`).join("")}</tbody></table></div>`;
}
function vehicleTable(items) {
  if (!items.length) return `<div class="empty-state">No vehicles match your search.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Vehicle</th><th>Assigned driver</th><th>Live location</th><th>Fuel</th><th>Next service</th><th>Status</th></tr></thead><tbody>${items.map(v => `<tr class="record-row"><td><span class="table-main">${v.id}</span><div class="table-sub">${v.model}</div></td><td><div class="person-cell">${avatar(v.initials)}<span class="table-main">${v.driver}</span></div></td><td>${v.location}</td><td><span class="fuel-bar"><i style="width:${v.fuel}%"></i></span>${v.fuel}%</td><td>${v.service === "Overdue" ? `<span class="status danger">Overdue</span>` : v.service}</td><td><span class="${statusClass(v.tone)}">${v.status}</span></td></tr>`).join("")}</tbody></table></div>`;
}
function driverTable(items) {
  if (!items.length) return `<div class="empty-state">No drivers match your search.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Driver</th><th>Vehicle</th><th>Today's deliveries</th><th>Last active</th><th>Status</th><th></th></tr></thead><tbody>${items.map(d => `<tr class="record-row"><td><div class="person-cell">${avatar(d.initials, d.tone)}<span><span class="table-main">${d.name}</span><div class="table-sub">${d.role}</div></span></div></td><td>${d.vehicle === "—" ? "—" : `<span class="table-main">${d.vehicle}</span>`}</td><td>${d.deliveries} deliveries</td><td>${d.time}</td><td><span class="${statusClass(d.tone)}">${d.status}</span></td><td><button class="table-action" data-toast="Opening ${d.name}'s profile">View profile</button></td></tr>`).join("")}</tbody></table></div>`;
}
function setCount() {
  const pending = deliveries.filter(d => d.status !== "Delivered").length;
  document.getElementById("delivery-count").textContent = pending;
}
function overviewView() {
  const todayDeliveries = deliveries.slice(0, 5);
  return `${heading("THURSDAY, OCTOBER 24, 2024", "Good morning, Mish 👋", "Here's what's happening across your fleet today.", `<button class="button button-quiet" data-action="export">↓ &nbsp;Export report</button><button class="button button-primary" data-action="new-delivery">＋ &nbsp;New delivery</button>`)}
    <div class="overview-grid">${metric("Active vehicles","18","vs. 16 last week","↑ 12.5%","▰")}${metric("Deliveries today","142","of 156 scheduled","↑ 8.2%","▤","orange")}${metric("On-time rate","96.4%","vs. 94.1% last month","↑ 2.3%","◷","blue")}${metric("Fuel spend this month","R 8,249","ZAR · vs. last month","↓ 4.8%","♧","purple")}</div>
    <div class="dashboard-grid"><section class="panel">${panelHeader("Live fleet map","18 vehicles active · Updated just now",'<button class="text-link" data-view-link="Live tracking">View live map →</button>')}<div class="map-container"><div class="map-grid"></div><div class="map-water"></div><div class="map-park park-one"></div><div class="map-park park-two"></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><div class="map-road road-four"></div><span class="map-label label-one">Pearl District</span><span class="map-label label-two">Downtown</span><span class="map-label label-three">Buckman</span><span class="map-label label-four">Lloyd District</span><div class="map-marker marker-one"><span>▰</span></div><div class="map-marker marker-two"><span>▰</span></div><div class="map-marker marker-three"><span>▰</span></div><div class="map-marker marker-four"><span>▰</span></div><div class="map-controls"><button data-toast="Map zoomed in">+</button><button data-toast="Map zoomed out">−</button></div><div class="map-legend"><span class="legend-item"><i class="legend-dot"></i>On route</span><span class="legend-item"><i class="legend-dot orange"></i>Idle</span><span class="legend-item"><i class="legend-dot gray"></i>Offline</span></div></div></section>
    <section class="panel activity-panel">${panelHeader("Recent activity","Latest updates from your team",'<button class="text-link" data-toast="Showing all activity">See all →</button>')}<div class="activity-list">${activity.map(a => `<div class="activity-item"><span class="activity-avatar ${a.tone}">${a.initials}</span><div class="activity-copy"><strong>${a.title}</strong><p>${a.detail}</p></div><span class="activity-time">${a.time}</span></div>`).join("")}</div></section></div>
    <section class="panel table-panel">${panelHeader("Today's deliveries","Keep an eye on your active deliveries",'<button class="text-link" data-view-link="Deliveries">All deliveries →</button>')}${deliveryTable(todayDeliveries,true)}<div class="table-footer"><span>Showing 5 of 156 deliveries</span><span>Last synced just now</span></div></section>`;
}
function trackingView() {
  return `${heading("FLEET OPERATIONS","Live tracking","Monitor your vehicles and drivers in real time.",'<button class="button button-quiet" data-toast="Vehicle locations refreshed">↻ &nbsp;Refresh locations</button>')}<div class="view-kpis"><div class="small-kpi"><span>Vehicles on route</span><strong>14 <span class="status">Live</span></strong></div><div class="small-kpi"><span>Idle vehicles</span><strong>3</strong></div><div class="small-kpi"><span>Last location update</span><strong style="font-size:16px">Just now</strong></div></div><section class="panel">${panelHeader("Live fleet map","Vehicle locations · Portland, Oregon",'<span class="status">Live updates</span>')}<div class="map-container route-map"><div class="map-grid"></div><div class="map-water"></div><div class="map-park park-one"></div><div class="map-park park-two"></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><div class="map-road road-four"></div><span class="map-label label-one">Pearl District</span><span class="map-label label-two">Downtown</span><span class="map-label label-three">Buckman</span><span class="map-label label-four">Lloyd District</span><div class="map-marker marker-one"><span>▰</span></div><div class="map-marker marker-two"><span>▰</span></div><div class="map-marker marker-three"><span>▰</span></div><div class="map-marker marker-four"><span>▰</span></div><div class="map-controls"><button data-toast="Map zoomed in">+</button><button data-toast="Map zoomed out">−</button></div><div class="map-legend"><span class="legend-item"><i class="legend-dot"></i>On route</span><span class="legend-item"><i class="legend-dot orange"></i>Idle</span><span class="legend-item"><i class="legend-dot gray"></i>Offline</span></div></div></section><section class="panel table-panel" style="margin-top:15px">${panelHeader("Vehicle locations","Live status and most recent GPS position")}<div id="vehicle-table">${vehicleTable(filtered(vehicles,["id","model","driver","location","status"]))}</div></section>`;
}
function vehiclesView() {
  return `${heading("FLEET OPERATIONS","Vehicles","Manage your fleet, vehicle health, and availability.",'<button class="button button-primary" data-toast="Vehicle registration is ready to connect">＋ &nbsp;Add vehicle</button>')}<div class="view-kpis"><div class="small-kpi"><span>Total vehicles</span><strong>24</strong></div><div class="small-kpi"><span>Active today</span><strong>18</strong></div><div class="small-kpi"><span>Needs attention</span><strong>2</strong></div></div><section class="panel table-panel">${panelHeader("Fleet inventory","Vehicle details, location, and service schedule")}<div id="vehicle-table">${vehicleTable(filtered(vehicles,["id","model","driver","location","status"]))}</div></section>`;
}
function driversView() {
  return `${heading("PEOPLE & TEAM","Drivers","Your people make every delivery possible.",'<button class="button button-primary" data-toast="Driver invitation is ready to send">＋ &nbsp;Invite driver</button>')}<div class="view-kpis"><div class="small-kpi"><span>Total drivers</span><strong>32</strong></div><div class="small-kpi"><span>On duty today</span><strong>24</strong></div><div class="small-kpi"><span>Available now</span><strong>8</strong></div></div><section class="panel table-panel">${panelHeader("Driver roster","Driver availability and today's workload")}<div id="driver-table">${driverTable(filtered(drivers,["name","role","vehicle","status"]))}</div></section>`;
}
function deliveriesView() {
  const rows = filtered(deliveries,["id","customer","address","driver","window","status"]);
  return `${heading("DELIVERY MANAGEMENT","Deliveries","Track every order from dispatch through proof of delivery.",'<button class="button button-primary" data-action="new-delivery">＋ &nbsp;New delivery</button>')}<div class="view-kpis"><div class="small-kpi"><span>Scheduled today</span><strong>${142 + Math.max(0, deliveries.length - 7)}</strong></div><div class="small-kpi"><span>In transit</span><strong>${deliveries.filter(d => d.status === "In transit").length}</strong></div><div class="small-kpi"><span>Successfully delivered</span><strong>${deliveries.filter(d => d.status === "Delivered").length}</strong></div></div><div class="view-toolbar"><div class="filter-row"><button class="filter-chip selected" data-filter="All deliveries">All deliveries</button><button class="filter-chip" data-filter="In transit">In transit</button><button class="filter-chip" data-filter="Pending">Pending</button><button class="filter-chip" data-filter="Delivered">Delivered</button></div><button class="button button-quiet" data-action="export">↓ &nbsp;Export</button></div><section class="panel table-panel"><div id="delivery-table">${deliveryTable(rows)}</div><div class="table-footer"><span>Showing ${rows.length} deliveries</span><span>Updated just now</span></div></section>`;
}
function fuelView() {
  const rows = filtered(fuelEntries,["vehicle","driver","station","date"]);
  return `${heading("FLEET OPERATIONS","Fuel tracking","Monitor fuel usage, spending, and vehicle efficiency.",'<button class="button button-primary" data-toast="Fuel receipt logging is ready">＋ &nbsp;Log fuel purchase</button>')}<div class="view-kpis"><div class="small-kpi"><span>Spend this month · ZAR</span><strong>R 8,249</strong></div><div class="small-kpi"><span>Average fuel economy</span><strong>17.6 <small style="font:400 10px 'DM Sans';color:#87918b">mpg</small></strong></div><div class="small-kpi"><span>Fuel used this month</span><strong>2,184 <small style="font:400 10px 'DM Sans';color:#87918b">gal</small></strong></div></div><section class="panel table-panel">${panelHeader("Recent fuel activity","Transactions across your fleet · Costs in ZAR")}<div class="table-wrap"><table><thead><tr><th>Date</th><th>Vehicle</th><th>Driver</th><th>Fuel station</th><th>Volume</th><th>Cost (ZAR)</th><th>Efficiency</th></tr></thead><tbody>${rows.length ? rows.map(f => `<tr><td>${f.date}</td><td class="table-main">${f.vehicle}</td><td>${f.driver}</td><td>${f.station}</td><td>${f.gallons}</td><td class="table-main">${f.cost}</td><td>${f.economy}</td></tr>`).join("") : '<tr><td colspan="7" class="empty-state">No fuel entries match your search.</td></tr>'}</tbody></table></div><div class="table-footer"><span>Showing ${rows.length} transactions</span><span>October 2024</span></div></section>`;
}
function maintenanceView() {
  const rows = filtered(maintenance,["vehicle","model","service","due","priority"]);
  return `${heading("FLEET OPERATIONS","Maintenance","Stay ahead of service and keep your fleet road-ready.",'<button class="button button-primary" data-toast="Maintenance scheduling is ready">＋ &nbsp;Schedule service</button>')}<div class="view-kpis"><div class="small-kpi"><span>Upcoming this month</span><strong>6</strong></div><div class="small-kpi"><span>Overdue services</span><strong>1</strong></div><div class="small-kpi"><span>Spend this month · ZAR</span><strong>R 2,840</strong></div></div><section class="panel table-panel">${panelHeader("Service schedule","Upcoming and recently completed maintenance · Costs in ZAR")}<div class="table-wrap"><table><thead><tr><th>Vehicle</th><th>Service required</th><th>Due date</th><th>Estimated cost (ZAR)</th><th>Priority</th><th></th></tr></thead><tbody>${rows.length ? rows.map(m => `<tr><td><span class="table-main">${m.vehicle}</span><div class="table-sub">${m.model}</div></td><td class="table-main">${m.service}</td><td><span class="${statusClass(m.tone)}">${m.due}</span></td><td>${m.cost}</td><td>${m.priority}</td><td><button class="table-action" data-toast="Service details for ${m.vehicle}">Details →</button></td></tr>`).join("") : '<tr><td colspan="6" class="empty-state">No maintenance items match your search.</td></tr>'}</tbody></table></div></section>`;
}
function routesView() {
  return `${heading("ROUTE OPTIMIZATION","Route planning","Plan smarter routes and make every mile count.",'<button class="button button-primary" data-toast="Route optimization started">✳ &nbsp;Optimize routes</button>')}<div class="view-kpis"><div class="small-kpi"><span>Routes in progress</span><strong>14</strong></div><div class="small-kpi"><span>Planned stops</span><strong>156</strong></div><div class="small-kpi"><span>Distance saved today</span><strong>128 <small style="font:400 10px 'DM Sans';color:#87918b">mi</small></strong></div></div><div class="route-layout"><section class="panel">${panelHeader("Today's routes","Optimized for traffic and delivery windows",'<button class="text-link" data-toast="Showing all routes">All routes →</button>')}<div class="map-container route-map"><div class="map-grid"></div><div class="map-water"></div><div class="map-park park-one"></div><div class="map-park park-two"></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><div class="map-road road-four"></div><div class="route-line"></div><span class="route-stop start stop-a"></span><span class="route-stop stop-b"></span><span class="route-stop stop-c"></span><span class="route-stop stop-d"></span><span class="map-label label-one">Pearl District</span><span class="map-label label-two">Downtown</span><span class="map-label label-three">Buckman</span></div></section><section class="panel">${panelHeader("Route #RT-089","Thabo Mokoena · VAN-204")}<div class="route-list"><div class="route-step"><span class="step-number">1</span><div><strong>Fleet depot</strong><p>Starting point · 8:00 AM</p></div><span class="step-meta">Start</span></div><div class="route-step"><span class="step-number">2</span><div><strong>Gather & Flourish</strong><p>901 SW Morrison St</p></div><span class="step-meta">8:24 AM</span></div><div class="route-step"><span class="step-number">3</span><div><strong>Olivia Martin</strong><p>1428 NW Everett St</p></div><span class="step-meta">9:10 AM</span></div><div class="route-step"><span class="step-number">4</span><div><strong>Rose City Coffee</strong><p>1105 N Shaver St</p></div><span class="step-meta">10:15 AM</span></div><div class="route-step"><span class="step-number">5</span><div><strong>Henry & Sons Market</strong><p>3212 SE Hawthorne Blvd</p></div><span class="step-meta">11:00 AM</span></div><div class="table-footer" style="padding-left:0;padding-right:0"><span>4 stops remaining</span><span>12.4 mi · ~1h 42m</span></div></div></section></div>`;
}
function analyticsView() {
  const bars = [56,72,61,83,68,94,75,89,65,81,73,98].map((h,i) => `<div class="chart-group"><i class="chart-bar" style="height:${Math.round(h*.7)}%"></i><i class="chart-bar primary" style="height:${h}%"></i><span class="chart-label">${["M","T","W","T","F","S","S","M","T","W","T","F"][i]}</span></div>`).join("");
  return `${heading("INSIGHTS & PERFORMANCE","Business analytics","Understand the numbers behind your delivery operation.",'<button class="button button-quiet" data-toast="Date range: last 30 days">Last 30 days &nbsp;⌄</button><button class="button button-primary" data-action="export">↓ &nbsp;Export report</button>')}<div class="overview-grid">${metric("Total deliveries","3,842","vs. previous 30 days","↑ 12.8%","▤")}${metric("On-time delivery","96.4%","vs. previous 30 days","↑ 2.3%","◷","blue")}${metric("Fleet utilization","82.1%","vs. previous 30 days","↑ 5.6%","▰","purple")}${metric("Cost per delivery","R 8.42","ZAR · vs. previous 30 days","↓ 3.2%","R","orange")}</div><div class="analytics-grid"><section class="panel">${panelHeader("Delivery performance","Completed deliveries · Last 12 weeks",'<button class="text-link" data-toast="Showing weekly performance">Weekly ⌄</button>')}<div class="chart-area"><div class="chart-grid"></div><div class="chart-ylabels"><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span></div><div class="chart-bars">${bars}</div></div></section><section class="panel">${panelHeader("Delivery status","Breakdown of all deliveries")}<div class="donut-wrap"><div class="donut"><div class="donut-center"><strong>3,842</strong><span>deliveries</span></div></div><div class="legend-list"><div class="legend-row"><i class="legend-square"></i>On time <strong>61%</strong></div><div class="legend-row"><i class="legend-square second"></i>Early <strong>22%</strong></div><div class="legend-row"><i class="legend-square third"></i>Delayed <strong>11%</strong></div><div class="legend-row"><i class="legend-square fourth"></i>Cancelled <strong>6%</strong></div></div></div></section><section class="panel">${panelHeader("Fleet efficiency","This month")}<div class="activity-list"><div class="activity-item"><span class="activity-avatar">◉</span><div class="activity-copy"><strong>Average fuel economy</strong><p>Fleet-wide average</p></div><span class="table-main">17.6 mpg</span></div><div class="activity-item"><span class="activity-avatar blue">⌁</span><div class="activity-copy"><strong>Distance driven</strong><p>Across 18 active vehicles</p></div><span class="table-main">24,820 mi</span></div><div class="activity-item"><span class="activity-avatar orange">R</span><div class="activity-copy"><strong>Fuel spend · ZAR</strong><p>4.8% lower than last month</p></div><span class="table-main">R 8,249</span></div></div></section><section class="panel">${panelHeader("Team highlights","Top driver this month")}<div class="activity-list"><div class="activity-item"><span class="activity-avatar">TM</span><div class="activity-copy"><strong>Thabo Mokoena</strong><p>On-time delivery rate</p></div><span class="status">99.2%</span></div><div class="activity-item"><span class="activity-avatar orange">NN</span><div class="activity-copy"><strong>Naledi Nkosi</strong><p>Deliveries completed</p></div><span class="status blue-status">284</span></div><div class="activity-item"><span class="activity-avatar blue">SD</span><div class="activity-copy"><strong>Sipho Dlamini</strong><p>Safety score</p></div><span class="status">98 / 100</span></div></div></section></div>`;
}
function simpleView(name) {
  const copy = {
    Reports: ["REPORTING", "Reports", "Your operational reports and exports.", '<button class="button button-primary" data-action="export">↓ &nbsp;Export report</button>', `<div class="view-kpis"><div class="small-kpi"><span>Delivery summary</span><strong>This week</strong></div><div class="small-kpi"><span>Fleet utilization</span><strong>This month</strong></div><div class="small-kpi"><span>Fuel & expenses</span><strong>This month</strong></div></div>`],
    Settings: ["WORKSPACE", "Settings", "Manage your workspace preferences.", "", `<section class="panel">${panelHeader("Workspace settings","Mish Logistics")}<div class="activity-list"><div class="activity-item"><div class="activity-copy"><strong>Workspace details</strong><p>Company name, timezone, and business preferences</p></div><button class="table-action" data-toast="Workspace details">Manage →</button></div><div class="activity-item"><div class="activity-copy"><strong>Team & permissions</strong><p>Manage user access and roles</p></div><button class="table-action" data-view-link="Drivers">Manage →</button></div><div class="activity-item"><div class="activity-copy"><strong>Notifications</strong><p>Choose the updates you receive</p></div><button class="table-action" data-toast="Notification preferences">Manage →</button></div></div></section>`]
  }[name];
  return `${heading(copy[0],copy[1],copy[2],copy[3])}${copy[4]}`;
}
const views = {
  Overview: overviewView,
  "Live tracking": trackingView,
  Deliveries: deliveriesView,
  Vehicles: vehiclesView,
  Drivers: driversView,
  "Route planning": routesView,
  Fuel: fuelView,
  Maintenance: maintenanceView,
  Analytics: analyticsView,
  Reports: () => simpleView("Reports"),
  Settings: () => simpleView("Settings")
};
function render() {
  currentView = views[currentView] ? currentView : "Overview";
  page.innerHTML = views[currentView]();
  document.getElementById("breadcrumb-current").textContent = currentView;
  document.querySelectorAll(".nav-item[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === currentView));
  setCount();
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
}
function openModal() {
  document.getElementById("modal-backdrop").hidden = false;
  document.querySelector('#delivery-form input[name="customer"]').focus();
}
function closeModal() {
  document.getElementById("modal-backdrop").hidden = true;
}
function exportReport() {
  const rows = [["Delivery ID","Customer","Address","Driver","Window","Status"], ...deliveries.map(d => [d.id,d.customer,d.address,d.driver,d.window,d.status])];
  const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"','""')}"`).join(",")).join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = "mish-deliveries.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Delivery report downloaded");
}

document.querySelectorAll(".nav-item[data-view]").forEach(button => button.addEventListener("click", () => {
  currentView = button.dataset.view;
  document.getElementById("sidebar").classList.remove("open");
  render();
}));
document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("global-search").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  if (currentView === "Deliveries") {
    const table = document.getElementById("delivery-table");
    if (table) table.innerHTML = deliveryTable(filtered(deliveries,["id","customer","address","driver","window","status"]));
  } else if (currentView === "Vehicles" || currentView === "Live tracking") {
    const table = document.getElementById("vehicle-table");
    if (table) table.innerHTML = vehicleTable(filtered(vehicles,["id","model","driver","location","status"]));
  } else if (currentView === "Drivers") {
    const table = document.getElementById("driver-table");
    if (table) table.innerHTML = driverTable(filtered(drivers,["name","role","vehicle","status"]));
  } else if (currentView === "Fuel") render();
  else if (currentView === "Maintenance") render();
});
document.getElementById("page-content").addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.action === "new-delivery") openModal();
  if (target.dataset.action === "export") exportReport();
  if (target.dataset.viewLink) { currentView = target.dataset.viewLink; render(); }
  if (target.dataset.toast) showToast(target.dataset.toast);
  if (target.dataset.deliver) {
    const item = deliveries.find(d => d.id === target.dataset.deliver);
    if (!item) return;
    item.status = "Delivered";
    item.progress = 100;
    item.tone = "blue";
    render();
    showToast(`${item.id} marked as delivered · confirmation recorded`);
  }
  if (target.dataset.filter) {
    document.querySelectorAll("[data-filter]").forEach(chip => chip.classList.toggle("selected", chip === target));
    const status = target.dataset.filter;
    const rows = status === "All deliveries" ? filtered(deliveries,["id","customer","address","driver","window","status"]) : filtered(deliveries.filter(d => d.status === status),["id","customer","address","driver","window","status"]);
    const table = document.getElementById("delivery-table");
    if (table) table.innerHTML = deliveryTable(rows);
  }
});
document.getElementById("delivery-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const customer = String(form.get("customer")).trim();
  const address = String(form.get("address")).trim();
  const driver = String(form.get("driver")).trim();
  const window = String(form.get("window")).trim();
  if (!customer || !address || !driver || !window) return;
  const initials = customer.split(/\s+/).slice(0,2).map(part => part[0]).join("").toUpperCase();
  const nextId = `DLV-${2842 + deliveries.length - 7}`;
  deliveries.unshift({ id: nextId, customer, initials, address, driver, window, status: "Pending", tone: "warning", progress: 0 });
  closeModal();
  event.currentTarget.reset();
  currentView = "Deliveries";
  searchTerm = "";
  document.getElementById("global-search").value = "";
  render();
  showToast(`Delivery ${nextId} created`);
});
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("cancel-modal").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", event => {
  if (event.target.id === "modal-backdrop") closeModal();
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("global-search").focus();
  }
  if (event.key === "Escape") closeModal();
});
document.getElementById("support-button").addEventListener("click", () => showToast("Help center is coming soon"));
render();
