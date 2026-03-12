# Vizon-Integrative-Programming

# ACTVITY 1 January 21,2026 D - 12:30 - 2:00 pm

# Landing Page

## 🔹 NEURON: Lava Series – Future Pickleball Concept

## 🔹 Description

This project presents a futuristic conceptual landing page for **NEURON**, a high-tech pickleball brand. It highlights the **Lava Series**, a paddle collection inspired by the power and intensity of volcanic energy.

The page is designed for tech-savvy athletes who appreciate both performance and visual design. It functions as a pre-launch showcase, using immersive visuals and storytelling to communicate the brand’s innovation, energy, and premium feel.

## 🔹 Technologies Used

- **HTML5** (Semantic Structure)
- **CSS3** (Flexbox, CSS Grid, Radial Gradients, Animations)
- **Google Fonts** (Orbitron & Rajdhani)
- **GitHub & GitHub Pages** (Version Control & Hosting)

## 🔹 Features

1. A custom gradient background and a futuristic hero section with soft glowing details.
2. The main paddle gently floats using smooth CSS animations.
3. A clean, modern grid layout that adapts well to both desktop and mobile screens.

## 🔹 AI Assistance Disclosure

# Did you use AI tools? (Yes)

# Tools Used: ChatGPT & Google Gemini

## 🔹 Learning Reflection

From this activity, I learned how to use absolute positioning to build more complex interface elements, such as the power meters, within a relative container. The most challenging part was controlling the `z-index` layers so the floating paddle appeared above the glowing interface elements without covering the text. I addressed this by reorganizing the HTML structure, which allowed the layers to display correctly.

---

# ACTVITY 2 January 26,2026 D - 12:30 - 2:00 pm

# Login and Signup page linking

# description:

This activity improves the NEURON: Lava Series landing page by adding Login and Sign-Up pages that are linked through the navigation bar. The website is designed for users who are interested in a futuristic pickleball brand. The login and sign-up forms simulate how users would create an account and access the site. These additions make the website more interactive and complete.

## 🔹 Features

1. Separate Login and Sign-Up pages with structured input forms.
2. Navigation links allowing smooth transitions between Home, Login, and Sign-Up pages.
3. Consistent futuristic visual theme using Orbitron and Rajdhani fonts.
4. Responsive authentication layout suitable for different screen sizes.

🔹 AI Assistance Disclosure (Required)

# Did you use AI tools? (Yes)

# AI Tools Used: ChatGPT & Google Gemini

# How they were used:

I used ChatGPT to help refine README documentation and layout ideas for the authentication pages.
I used Google Gemini to assist with HTML structure and CSS styling consistency.
All code was reviewed, tested, and customized by me.

# 🔹 Learning Reflection

This activity helped me understand how to create and link multiple pages while maintaining a consistent design. The most challenging part was organizing the form layout and navigation structure. I also learned how user flow impacts the overall usability of a website.

## Pages Added

- `login.html` – Login UI page for existing NEURON users
- `signup.html` – Signup UI page for new NEURON accounts

---

# ACTIVITY 3 February 4, 2026 D - 2:15 - 3:30 pm

# Profile and Settings Page Linking

# Description:

This activity improves the NEURON: Lava Series website by adding **Profile** and **Settings** pages that are linked through the navigation bar. The Profile page displays user information and a personal info section, while the Settings page provides a static UI for changing account details. These additions make the website more interactive and give a dashboard-like experience for users.

## 🔹 Features

1. Separate Profile and Settings pages with structured sections.
2. Navigation links allowing smooth transitions between Home, Login, Profile, and Settings pages.
3. Consistent futuristic visual theme using Orbitron and Rajdhani fonts.
4. Responsive layout suitable for different screen sizes.
5. Profile page includes avatar, full name, email, address, and About Me section.
6. Settings page includes visual form fields for email, address, password, theme option, and a save button.

🔹 AI Assistance Disclosure (Required)

# Did you use AI tools? (Yes)

# AI Tools Used: ChatGPT & Google Gemini

# 🔹 Learning Reflection

This activity helped me understand how to create and link multiple pages in a dashboard-style layout while maintaining consistent design.
The most challenging part was organizing the navigation and ensuring all links worked correctly on GitHub Pages.
I also learned the importance of user flow and layout consistency for a professional-looking website.

## Pages Added

- `profile.html` – Profile page displaying user info and navigation links
- `settings.html` – Settings page with static form for account updates

---

# ACTIVITY 4 March 4, 2026 D - 2:15 - 3:30 pm

# Client-side Validation Rule

Description:
This activity extends the NEURON: Lava Series website by implementing client-side form validation using JavaScript. A new script.js file was added to validate all interactive forms across the site — Login, Sign Up, and Settings. Validation runs on form submission and provides real-time inline feedback with styled error messages and a toast notification on success.

🔹 Features

1. Login form validates that email is properly formatted and password is at least 6 characters.
2. Sign Up form validates full name length, email format, password strength (uppercase + number required), and matching confirm password.
3. Settings form validates optional email and password fields only when filled in, including a confirm password match check.
4. Inline error messages appear beneath each invalid field with a fade-in animation.
5. A lava-themed toast notification confirms success on valid submission.

🔹 AI Assistance Disclosure (Required)
Did you use AI tools? (Yes)
AI Tools Used: Claude (Anthropic)
How they were used:
I used Claude to help generate the JavaScript validation logic in script.js and the corresponding CSS styles for error states and toast notifications.

🔹 Learning Reflection
This activity helped me understand how JavaScript interacts with the DOM to validate user input before a form is submitted. The most challenging part was handling the Settings form, where fields are optional but still need to be validated when filled. I also learned how to provide clear, accessible feedback to users through inline error messages and visual state changes.
Files Modified

## Pages Added

1. script.js — New file containing all client-side validation logic
2. login.html — Added id attributes and novalidate, linked script.js
3. signup.html — Added id attributes and novalidate, linked script.js
4. settings.html — Added id attributes, confirm password field, and linked script.js
5. style.css — Added styles for .input-error, .error-msg, and .lava-toast

---

# ACTIVITY 5 March 9, 2026 D - 2:15 - 3:30 pm

# Client-side Admin Pages

Description:
This activity extends the NEURON: Lava Series website by implementing a basic admin interface using HTML, CSS, and JavaScript. Three new admin pages were added: a dashboard, a user management table, and an add user form. Admin pages are protected by a role check — if the logged-in user is an admin (detected via email containing "admin"), they are redirected to the Admin Dashboard after login.

🔹 Features

1. Admin Dashboard (admin.html) with stat cards (Total Users, Active Sessions, Admins) and quick navigation links.
   Manage Users page (manage-users.html) with a styled data table showing ID, Name, Email, Role, and a working Delete button.
2. Add User form (add-user.html) with full client-side validation for Name, Email, Password, and Role fields.
   Admin access guard on all admin pages — redirects to login if role is not admin.
3. Login page updated to detect admin role and redirect accordingly.

🔹 AI Assistance Disclosure (Required)
Did you use AI tools? (Yes)
AI Tools Used: Claude (Anthropic)
How they were used:
I used Claude to help generate the HTML structure, CSS styling, and JavaScript logic for the admin pages. All pages were reviewed and tested by me to ensure they matched the existing design system and activity requirements.

🔹 Learning Reflection
This activity introduced me to the concept of role-based access control in web applications. The most challenging part was connecting the login role detection to the admin page guard using sessionStorage. I also learned how to build a CRUD-style interface with a data table and delete functionality using JavaScript DOM manipulation.
Pages Added

## Pages Added

1. admin.html — Admin Dashboard with stats and navigation
2. manage-users.html — User table with delete functionality
3. add-user.html — Add user form with client-side validation

---
#   P r o j e c t - 1  
 #   P r o j e c t - 1  
 #   P r o j e c t - 1  
 