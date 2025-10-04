/* =====================================================
   File: js/script.js
   Project: Bugeta Tourism Website
   Description: ฟังก์ชันเสริมสำหรับทุกหน้า
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Update ปีปัจจุบันใน footer ----------
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ---------- Toggle เมนูมือถือ ----------
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
  }

  // ---------- ปุ่มกลับขึ้นบน ----------
  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        toTop.classList.add("show");
      } else {
        toTop.classList.remove("show");
      }
    });

    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- Highlight เมนูที่กำลังอยู่ ----------
  const navLinks = document.querySelectorAll(".nav__menu a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("is-active");
    }
  });

  // ---------- ตัวอย่าง: ฟิลเตอร์ค้นหาในหน้า destinations ----------
  const searchInput = document.getElementById("searchDest");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? "" : "none";
      });
    });
  }

  console.log("✅ Bugeta Tourism Website scripts loaded");
});