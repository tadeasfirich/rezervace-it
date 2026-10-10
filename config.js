// Nastavení připojení ke školnímu Microsoft 365.
// Dokud jsou hodnoty prázdné, aplikace běží jako ukázka (bez přihlášení, data jen v prohlížeči).
// Nic z toho není heslo ani tajný klíč – soubor může být veřejně na GitHubu.
window.REZERVACE_IT = {
  tenantId: '250cc053-db88-43ef-9b49-f32166589a36',   // ID adresáře (tenanta) – z registrace aplikace v Entra
  clientId: '1c07c25e-820c-4934-8d27-6be2f93e43e6',   // ID aplikace (klienta) – z registrace aplikace v Entra
  web: 'https://zslibcice.sharepoint.com/sites/RezervaceIT',        // adresa SharePoint webu, např. https://VASESKOLA.sharepoint.com/sites/RezervaceIT
  spravce: 'firich@skola.libcice.cz',    // váš školní e-mail – hlavní správce, který aplikaci poprvé připraví
  domena: 'skola.libcice.cz',  // jen nápověda pro přihlašovací okno Microsoftu
};
