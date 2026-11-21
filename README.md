# Jyesta Internship Certificate & QR Verification System

A lightweight, zero-dependency, static web application to verify and print official **Jyesta Corporate Entity** internship certificates via QR codes.

Hosted on **GitHub Pages** with zero hosting costs, high availability, and complete isolation of admin tools.

---

## 📌 Table of Contents
1. [URL Format & Short Keys](#-url-format--short-keys)
2. [Supported Domain Shortcuts](#-supported-domain-shortcuts)
3. [Portal Screen (When No Parameter is Passed)](#-portal-screen-when-no-parameter-is-passed)
4. [Bulk URL Generation (Excel / Google Sheets)](#-bulk-url-generation-excel--google-sheets)
5. [Generating QR Codes with Online Tools](#-generating-qr-codes-with-online-tools)
6. [How to Run & Test Locally](#-how-to-run--test-locally)
7. [How to Deploy to GitHub Pages](#-how-to-deploy-to-github-pages)
8. [Private Admin Generator Tool](#-private-admin-generator-tool)
9. [Repository File Structure](#-repository-file-structure)

---

## 🔗 URL Format & Short Keys

When you hand over a certificate, the QR code on the certificate points to your GitHub Pages URL using short parameters:

```text
https://<username>.github.io/<repo-name>/?n=ACTUAL_NAME&t=TRACK&i=THE_ID
```

### Real Example:
```text
https://<username>.github.io/internship-certificate/?n=Shubham+dey&t=FS&i=JC-20250816-UPONXWML
```

### Parameter Reference

| Parameter | Required | Description | Example Values |
| :--- | :---: | :--- | :--- |
| **`n`** (or `name`) | **Yes** | Full candidate name | `Shubham dey`, `Priya Sharma` |
| **`t`** (or `type`) | **Yes** | Domain shortcut or full title | `FS`, `DS`, `AI`, `FULLSTACK WEB DEVELOPMENT` |
| **`i`** (or `id`) | **Yes** | Unique Certificate ID | `JC-20250816-UPONXWML` |

> [!NOTE]
> **Static Dates**: The certificate dates are permanently static:
> - **From**: `01-07-2026`
> - **To**: `31-07-2026`
> - **Issued on**: `31-07-2026`
> 
> You do **not** need to include date parameters in the URL.

---

## ⚡ Supported Domain Shortcuts (`t=...`)

You can use short abbreviations in `?t=...` and the certificate will automatically expand and display the full official title:

| Shortcut (`t=`) | Displays On Certificate As |
| :--- | :--- |
| `FS` or `FULLSTACK` or `FULL_STACK` | **FULLSTACK WEB DEVELOPMENT** |
| `FE` or `FRONTEND` | **FRONTEND WEB DEVELOPMENT** |
| `BE` or `BACKEND` | **BACKEND WEB DEVELOPMENT** |
| `DS` or `DATA_SCIENCE` | **DATA SCIENCE & ANALYTICS** |
| `AI` or `AIML` or `AI_ML` | **ARTIFICIAL INTELLIGENCE & MACHINE LEARNING** |
| `PY` or `PYTHON` | **PYTHON DEVELOPMENT** |
| `CS` or `CYBER` | **CYBER SECURITY** |
| `CLOUD` or `DEVOPS` | **CLOUD COMPUTING & DEVOPS** |
| `APP` or `ANDROID` | **ANDROID APP DEVELOPMENT** |
| `UI` or `UX` or `UIUX` | **UI/UX DESIGN** |
| *Any custom string* | *Displays your custom string in uppercase* |

---

## 🛡️ Portal Screen (When No Parameter is Passed)

When someone opens the root link without query parameters:
```text
https://<username>.github.io/internship-certificate/
```
- It does **not** display any default candidate's certificate.
- It displays the official **Jyesta Certificate Verification Portal** informing the visitor that no certificate was specified, instructing them to scan the official QR code, or allowing them to manually enter candidate name, track, and certificate ID.

---

## 📊 Bulk URL Generation (Excel / Google Sheets)

If you have a batch of interns, you can generate all short verification links at once in a spreadsheet:

1. Setup columns in Excel or Google Sheets:
   - **Column A**: Candidate Name (e.g. `Shubham dey`)
   - **Column B**: Track Shortcut or Title (e.g. `FS`)
   - **Column C**: Certificate ID (e.g. `JC-20250816-UPONXWML`)
   - **Column D**: Verification Link (Formula)

2. Paste this formula into cell **D2**:
   ```excel
   ="https://<username>.github.io/<repo-name>/?n=" & ENCODEURL(A2) & "&t=" & ENCODEURL(B2) & "&i=" & ENCODEURL(C2)
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
   - Paste the short link generated above.
   - Download the QR code as **PNG** or **SVG** and place it in the "Scan to verify" section of the certificate.

---

## 💻 How to Run & Test Locally

### 1. Test Verification Portal (No Params)
Open `index.html` directly in your browser:
```text
file:///C:/Code/internship-certificate/index.html
```
*(Verify that the Verification Portal screen displays with zero dummy data).*

### 2. Test Verified Certificate (With Short Params)
Open `index.html` with query parameters:
```text
file:///C:/Code/internship-certificate/index.html?n=Shubham+dey&t=FS&i=JC-20250816-UPONXWML
```
*(Verify that Shubham dey's certificate renders with full track name, static dates, and QR code).*

---

## 🚀 How to Deploy to GitHub Pages & Netlify

### A. Deploy to GitHub Pages
1. **Commit and Push your changes**:
   ```powershell
   git add .
   git commit -m "Add Netlify configuration and verification updates"
   git push origin main
   ```
2. Your GitHub Pages site will update automatically in ~30 seconds!

### B. Deploy to Netlify
- Netlify automatically detects the included `netlify.toml`, `_redirects`, and `_headers` files.
- **Both URL styles are supported on Netlify**:
  - Direct root URL:
    ```text
    https://internship-certificate-jyesta.netlify.app/?n=Aditya%20Chowdhury&t=STOCK%20MARKET%20ASSOCIATE&i=FX3201
    ```
  - Subpath URL (GitHub Pages compatibility):
    ```text
    https://internship-certificate-jyesta.netlify.app/internship-certificate/?n=Aditya%20Chowdhury&t=STOCK%20MARKET%20ASSOCIATE&i=FX3201
    ```
- All rewrites, asset paths, and query parameters are seamlessly preserved.

---

## 🔒 Private Admin Generator Tool

You can also use your local admin tool to auto-generate Certificate IDs and preview short links:
- Located at: [`private_tools/generator.html`](file:///c:/Code/internship-certificate/private_tools/generator.html).
- Kept strictly local via `.gitignore` (never pushed to GitHub).
