document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  displayIndex();
});

function displayIndex() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
          <section class="indexDiv">
        <section class="coverSectionImg"></section>
        <section class="coverSection">
          <p>From a single desk to a whole building. The choice is yours.</p>
          <p class="logo">Office space your way<i>.</i></p>
        </section>
        <section id="presence">
          <div id="pMap">
            <p>The Offizoo Footprint</p>
            <h2>Our Established Presence Spans</h2>
            <div id="stat">
              <div class="count">
                <h3>7</h3>
                <p>Cities</p>
              </div>
              <div class="count">
                <h3>9.5+</h3>
                <p>Million Sq.Ft.</p>
              </div>
              <div class="count">
                <h3>300+</h3>
                <p>Clients</p>
              </div>
              <div class="count">
                <h3>60+</h3>
                <p>Centers</p>
              </div>
            </div>
            <p>
              <b
                >All offices are 100% Custom-Built to Client Requirements &
                Specifications</b
              >
            </p>
          </div>
          <div id="pImg"></div>
        </section>
        <section id="spaces" class="spaces">
          <h2>Our Office Spaces</h2>
          <div class="card-container">
            <div class="card">
              <h3>Private Offices</h3>
              <p>Fully equipped private offices for you and your team.</p>
            </div>
            <div class="card">
              <h3>Shared Workspaces</h3>
              <p>Flexible desks in collaborative environments.</p>
            </div>
            <div class="card">
              <h3>Meeting Rooms</h3>
              <p>
                State-of-the-art rooms for client meetings and brainstorming
                sessions.
              </p>
            </div>
          </div>
        </section>
        <section class="blankSection"></section>
        <section class="companies">
          <h2 class="logo">Trusted by the world’s largest companies<i>.</i></h2>
          <div>
            <img src="images/google.png" alt="google" /><img
              src="images/apple.png"
              alt="apple"
            /><img src="images/stantec.png" alt="stantec" /><img
              src="images/amd.png"
              alt="amd"
            /><img src="images/mastercard.jpeg" alt="mastercard" />
          </div>
        </section>
      </section>
        `;
}

const locationsButton = document.getElementById("locationsBtn");
locationsButton.addEventListener("click", displayLocations);

function displayLocations() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
  <section class="location-portfolio">
        <section class="portfolio-section">
          <div class="portfolio-header">
            <h3>Our Locations</h3>
            <h1>Our Esteemed <span>Portfolio</span></h1>
          </div>
          <div class="stats">
            <div class="stat-item">
              <h2>7+</h2>
              <p>Cities</p>
            </div>
            <div class="stat-item">
              <h2>9.5+</h2>
              <p>Million Sq. Ft.</p>
            </div>
            <div class="stat-item">
              <h2>300+</h2>
              <p>Clients</p>
            </div>
            <div class="stat-item">
              <h2>60+</h2>
              <p>Centers</p>
            </div>
          </div>
          <div class="locations">
            <div class="location-card">
              <img src="images/bengaluru.jpeg" alt="Bengaluru" />
              <div class="card-content">
                <h3>Bengaluru</h3>
                <a href="#">View More →</a>
              </div>
            </div>
            <div class="location-card">
              <img src="images/mumbai.jpeg" alt="Mumbai" />
              <div class="card-content">
                <h3>Mumbai</h3>
                <a href="#">View More →</a>
              </div>
            </div>
            <div class="location-card">
              <img src="images/pune.jpeg" alt="Pune" />
              <div class="card-content">
                <h3>Pune</h3>
                <a href="#">View More →</a>
              </div>
            </div>
            <div class="location-card">
              <img src="images/bengaluru.jpeg" alt="Hyderabad" />
              <div class="card-content">
                <h3>Hyderabad</h3>
                <a href="#">View More →</a>
              </div>
            </div>
            <div class="location-card">
              <img src="images/delhi.jpeg" alt="Delhi" />
              <div class="card-content">
                <h3>Delhi</h3>
                <a href="#">View More →</a>
              </div>
            </div>
            <div class="location-card">
              <img src="images/chennai.jpeg" alt="Chennai" />
              <div class="card-content">
                <h3>Chennai</h3>
                <a href="#">View More →</a>
              </div>
            </div>
          </div>
        </section>
      </section>
`;
}

const spacesButton = document.getElementById("spacesBtn");
spacesButton.addEventListener("click", displaySpaces);

async function displaySpaces() {
  const mainContent = document.getElementById("main-content");

  try {
    // Fetch product data from the backend
    const response = await fetch("/space");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const spacesJson = await response.json();

    const spaces = spacesJson.data;

    const spaceHTML = spaces
      .map(
        (space) => `
        <div class="center-card">
            <img src="${space.imgLink}" alt="${space.spaceName} Img" />
            <div class="card-content">
              <h2>${space.spaceName}</h2>
              <p>${space.address}</p>
              <div class="info">
                <p>
                  <strong>Area:</strong>
                  <span class="highlight">${space.area} sq. Ft</span>
                </p>
                <p><strong>Grade:</strong> <span class="highlight">${space.grade}</span></p>
              </div>
              <p>Common Amenities for Tenants</p>
              <ul class="amenities">
                <li><span>🏥</span> Medical Room</li>
                <li><span>🏋️</span> Gym</li>
                <li><span>🍴</span> Pantry Area</li>
                <li><span>🎮</span> Leisure Zone</li>
              </ul>
            </div>
          </div>
    `
      )
      .join("");

    mainContent.innerHTML = `
<section class="center-section">
        <div class="center-header">
          <h1>Our Spaces</h1>
          <p>
            Our objective is to make your workspace fully equipped with secure
            access.
          </p>
          <p>We like to be transparent.</p>
        </div>
        <div class="center-container">
          ${spaceHTML}
        </div>
      </section>
`;
  } catch (error) {
    // Handle errors
    mainContent.innerHTML = `<p>Error loading spaces: ${error.message}</p>`;
    console.error("Error fetching spaces:", error);
  }
}

const aboutUsButton = document.getElementById("aboutUsBtn");
aboutUsButton.addEventListener("click", displayAboutUs);

function displayAboutUs() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
  <section class="who-we-are">
    <div class="hero-section">
      <h1>Who We Are</h1>
      <div class="arrow-icon">↓</div>
    </div>
    <div class="content-section">
      <p>We are <strong>Offizoo</strong> & we go beyond the traditional focus to provide comprehensive solutions 
      that meet all your workspace requirements by offering the complete spectrum of services that encompass 
      <strong>Lease, Design, Build & Operate</strong>. When you choose Offizoo, we become your trusted single point of contact 
      for all your workspace needs.</p>
      <p><strong>With Offizoo, you can expect a seamless & hassle-free experience throughout the entire workspace lifecycle.</strong></p>
      <p>From finding the perfect location, to designing & constructing your ideal workspace, to managing day-to-day 
      operations, we are here to support you every step of the way. We are dedicated to providing state-of-the-art 
      workspaces that inspire & empower your business to thrive. Let us take care of your workspace needs so that 
      you can focus on what you do best – driving your business forward.</p>
    </div>
  </section>
  `;
}

const contactUsButton = document.getElementById("contactUsBtn");
contactUsButton.addEventListener("click", displayContactUs);

function displayContactUs() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
  <section class="contact-section">
        <div class="contact-header">
          <h1>Contact Us</h1>
          <!-- <p>We’d love to hear from you! </br>Whether you have a question about our products, need assistance, feel free
          to reach out.</p> -->
        </div>
        <div class="contact-body">
          <div class="contact-body-title">
            <h1>Let Table Space help you find the ideal</h1>
            <h1 class="highlight">Workspace Solution.</h1>
          </div>
          <div class="form-container">
            <form action="#" method="post">
              <div class="form-row">
                <div class="form-group">
                  <label for="first_name" class="required">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="last_name" class="required">Last Name</label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="required">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="mobile" class="required">Mobile No.</label>
                <input type="tel" id="mobile" name="mobile" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div class="form-group">
                  <label for="location" class="required">Location</label>
                  <select id="location" name="location" required>
                    <option value="">Select Location</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                    <option value="hydrabad">Hydrabad</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="people" class="required">No. of People</label>
                  <select id="people" name="people" required>
                    <option value="">Select No. of People</option>
                    <option value="1-50">1-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-500">100-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="looking_for" class="required"
                    >What are you looking for?</label
                  >
                  <select id="looking_for" name="looking_for" required>
                    <option value="">What are you looking for?</option>
                    <option value="managed offices">Managed Offices</option>
                    <option value="ready-to-move-in private offices">
                      Ready-to-move-in private offices
                    </option>
                    <option value="i'm not sure, i need help">
                      I'm not sure, I need help
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    `;
}
