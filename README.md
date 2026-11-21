# Jyesta Internship Certificate & QR Verification System

A lightweight, zero-dependency, static web application to verify and print official **Jyesta Corporate Entity** internship certificates via QR codes.

Hosted on **GitHub Pages** with zero hosting costs, high availability, and complete isolation of admin tools.

---

## 📌 Table of Contents
1. [URL Generation Format](#-url-generation-format)
2. [Bulk URL Generation (Excel / Google Sheets)](#-bulk-url-generation-excel--google-sheets)
3. [Generating QR Codes with Online Tools](#-generating-qr-codes-with-online-tools)
4. [How to Run & Test Locally](#-how-to-run--test-locally)
5. [How to Deploy to GitHub Pages](#-how-to-deploy-to-github-pages)
6. [Private Admin Generator Tool](#-private-admin-generator-tool)
7. [Repository File Structure](#-repository-file-structure)

---

## 🔗 URL Generation Format

When you hand over a certificate, the QR code on the certificate points to your GitHub Pages URL:

```text
https://<username>.github.io/<repo-name>/?name=ACTUAL_NAME&type=FULL_STACK&id=THE_ID
```

### Parameter Reference

| Parameter | Required | Description | Example Values |
| :--- | :---: | :--- | :--- |
| `name` | **Yes** | Full candidate name | `Shubham dey`, `Priya Sharma` |
| `type` | **Yes** | Internship domain/track | `FULLSTACK WEB DEVELOPMENT`, `DATA SCIENCE` |
| `id` | **Yes** | Unique Certificate ID | `JC-20250816-UPONXWML` |
| `from` | Optional | Start Date (defaults to `01-07-2026`) | `01-07-2026` |
| `to` | Optional | End Date (defaults to `31-07-2026`) | `31-07-2026` |
| `issued` | Optional | Issue Date (defaults to `31-07-2026`) | `31-07-2026` |

### URL Encoding Rules
- Replace spaces with `+` or `%20` (e.g. `Shubham+dey` or `Shubham%20dey`).
- Replace `&` with `%26` if your domain name contains an ampersand (e.g. `AI+%26+ML`).
- Any underscores `_` in `name` or `type` are automatically converted to spaces on display (e.g. `FULL_STACK` displays as `FULL STACK`).

---

## 📊 Bulk URL Generation (Excel / Google Sheets)

If you have a batch of interns, you can generate all verification links at once in a spreadsheet:

1. Setup columns in Excel or Google Sheets:
   - **Column A**: Candidate Name (e.g. `Shubham dey`)
   - **Column B**: Track / Domain (e.g. `FULLSTACK WEB DEVELOPMENT`)
   - **Column C**: Certificate ID (e.g. `JC-20250816-UPONXWML`)
   - **Column D**: Verification Link (Formula)

2. Paste this formula into cell **D2**:
   ```excel
   ="https://<username>.github.io/<repo-name>/?name=" & ENCODEURL(A2) & "&type=" & ENCODEURL(B2) & "&id=" & ENCODEURL(C2)
   ```
   *(Replace `<username>` and `<repo-name>` with your actual GitHub username and repository name).*

3. Drag the formula down to instantly create links for all interns!

---

## 📱 Generating QR Codes with Online Tools

Once you have your generated link, paste it into any QR code generator:
1. **Popular Online Tools**:
   - [qr-code-generator.com](https://www.qr-code-generator.com/)
   - [me-qr.com](https://me-qr.com/)
   - [qrcode-monkey.com](https://www.qrcode-monkey.com/)
   - Canva (Built-in QR Code App)
2. **Settings**:
   - Choose **URL / Website**.
   - Paste the link generated above.
   - Download the QR code as **PNG** or **SVG** and place it in the "Scan to verify" section of the certificate.

---

## 💻 How to Run & Test Locally

You can test the certificate on your computer before deploying:

### Option 1: Direct File Open (Easiest)
Simply double-click `index.html` in your file explorer, or open it in your browser with test query parameters:
```text
file:///C:/Code/internship-certificate/index.html?name=Shubham+dey&type=FULLSTACK+WEB+DEVELOPMENT&id=JC-20250816-UPONXWML
```

### Option 2: Using Node (`npx serve`)
In your terminal:
```powershell
npx serve .
```
Then open:
```text
http://localhost:3000/?name=Shubham+dey&type=FULLSTACK+WEB+DEVELOPMENT&id=JC-20250816-UPONXWML
```

### Option 3: Using VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🚀 How to Deploy to GitHub Pages

Deploying takes about 1 minute:

### Step 1: Initialize Git and Commit
In the project root (`c:\Code\internship-certificate`):
```powershell
git init
git add .
git commit -m "Initial commit: Jyesta certificate verification system"
```
*(Notice: `.gitignore` automatically prevents `private_tools/` from being committed).*

### Step 2: Push to GitHub
1. Create a new repository on GitHub (e.g. `internship-certificate`). Keep it **Public**.
2. Run:
```powershell
git remote add origin https://github.com/<YOUR-USERNAME>/internship-certificate.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) → **Pages** (left sidebar).
3. Under **Branch**, select `main` and root `/(root)`, then click **Save**.
4. Within 1 minute, GitHub will give you your live URL:
   ```text
   https://<YOUR-USERNAME>.github.io/internship-certificate/
   ```

---

## 🔒 Private Admin Generator Tool

To ensure that recipients or employers **cannot** access the generator, `generator.html` has been isolated into `private_tools/` and added to `.gitignore`.

- It is strictly on your local PC at: [`private_tools/generator.html`](file:///c:/Code/internship-certificate/private_tools/generator.html).
- It never gets pushed to GitHub.
- The public `index.html` certificate page has zero links or references to it.

You can still open [`private_tools/generator.html`](file:///c:/Code/internship-certificate/private_tools/generator.html) on your computer anytime to auto-generate Certificate IDs and preview links locally.

---

## 📁 Repository File Structure

```
c:\Code\internship-certificate\
├── .gitignore                    # Excludes private_tools from GitHub
├── index.html                    # Public Certificate Verification Page (GitHub Pages)
├── assets\
│   ├── style.css                 # Certificate typography & A4 landscape print CSS
│   ├── qrcode.js                 # Standalone offline QR code renderer
│   └── jyesta-elements.js        # Vector SVGs (Logo, ISO seal, MSME badge, Signature)
├── private_tools\                # Local-only administrative tools (gitignored)
│   └── generator.html            # Private link & QR code generator
└── README.md                     # Documentation & usage guide
```
