// Nastavení připojení ke školnímu Microsoft 365.
// Dokud jsou hodnoty prázdné, aplikace běží jako ukázka (bez přihlášení, data jen v prohlížeči).
// Nic z toho není heslo ani tajný klíč – soubor může být veřejně na GitHubu.
window.REZERVACE_IT = {
  tenantId: '',   // ID adresáře (tenanta) – z registrace aplikace v Entra
  clientId: '',   // ID aplikace (klienta) – z registrace aplikace v Entra
  web: '',        // adresa SharePoint webu, např. https://VASESKOLA.sharepoint.com/sites/RezervaceIT
  spravce: '',    // váš školní e-mail – hlavní správce, který aplikaci poprvé připraví
  domena: 'skola.libcice.cz',  // jen nápověda pro přihlašovací okno Microsoftu
};
