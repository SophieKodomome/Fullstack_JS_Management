# Fullstack_JS_Management
<h2>Goal:</h2>
<p>A full stack js application for managing stock &amp; maintenance</p>
<h2>Features:</h2>
<ul>
  <li>Develop a form to capture details: name, type, purchase date, cost</li>
  <li>Categorize assets (e.g., machines, IT equipment, vehicles)</li>
  <li>Geolocalize site(physical Stock System)</li>
  <li>Status(in service, repair, out of order)</li>
  <li>Maintenance planning system</li>
  <li>Critical Alert for due date (&eacute;ch&eacute;ance) </li>
  <li>Maintenance Log (date & cost)</li>
  <li>Access rights management</li>
  <li>Event Log</li>
  <li>Analytique board</li>
  <li>AI implimentation</li>
  <li>PDF/Excel Download</li>
</ul>
<h2>Technology &#x1F680;</h2>
  <h3>Front</h3>
  <ul>
    <li>React</li>
    <li>TailwindCSS</li>
    <li>ChartJS</li>
    <li>GSAP</li>
    <li>Axios</li>
    <li>FinanceJS</li>
    <li>Yarn</li>
  </ul>
  <h3>API</h3>
  <ul>
    <li>Gemini AI</li>
    <li>Express</li>
  </ul>
  <h3>BackEnd</h3>
  <ul>
    <li>node js</li>
    <li>Postgre</li>
    <li>Prisma</li>
  </ul>
<h2>To do list &#x1F4CB;</h2>
    <h3>Back End</h3>
        <h4>Database mobi</h4>
            <li>user:mobi password:mobi database:mobi</li>
            <li>See script sql<li>
            <li>Table categorie(id,nom)</li>
            <li>Table geolocalisation(id,localisation)</li>
            <li>Table status(id,status)</li>
            <li>Table role(id,role,rang)</li>
            <li>Table Materiel(id,nom,id_categorie,date_achat,cout,id_geo_localisation,id_status,duree_de_vie_utile,valeur_residuel)</li>
            <li>Table utilisateur(id,nom,mail,id_role,mot_de_passe)</li>
            <li>Table permission(id,permission,id_role)</li>
            <li>Table historique(id,id_utilisateur,date_evenement,evenementt)</li>
            <li>Table requete(id,requete_sql,id_demande_par,id_approve_par,date)</li>
        <h4>Files</h4>
            <li>schema.prisma</li>
    <h3>Front End</h3>
            <h4>Shared Layout</h4>
            <ul>
              Header
            </ul>
            <ul>
              Footer
            </ul>
              <ul>
                <li>Chat Aside(right)</li>
                <li>Navbar Aside(left)</li>
                <ul>
                  <li>Utilisateur</li>
                  <ul>
                    <li>Info Utilisateur</li>
                    <li>Mon Historique</li>
                    <li>Deconnection</li>
                  </ul>
                </ul>
                <ul>
                  <li>Accueil</li>
                  <li>Analytic</li>
                  <li>Maintenance</li>
                  <li>Requete</li>
                  <li>Historique</li>
                  <li>Ajouter Nouveau Materiaux</li>
                </ul>
              </ul>
    <h3>Pages & Data to Fetch</h3>
      <h4>Page Login</h4>
        <h5>Front End<h5>
          <li>Script</li>
          <ul>
            <li>post('/postUser')</li>
          </ul>
          <li>Form</li>
          <ul>
            <li>input nom</li>
            <li>input mot_de_passe</li>
            <li>bouton ok</li>
          </ul>
        <h5>Back End</h5>
          <li>index.js</li>
          <li>app.post('/postUser')</li>
          <ul>
            <li>check if user exist</li>
            <li>if exist, send response(user.name,user.role)</li>
            <li>else,send response("email ou mot de passe incorrect")</li>
          </ul>
      <h4>Page Accueil</h4>
        <h5>Front End</h5>
          <li>Script</li>
          <ul>
            <li>fetch('/getStock')</li>
            <li>fetch('/getCategory')</li>
            <li>fetch('/getMaterial')</li>
          </ul>
          <li>Filtre recherche(stock,categorie,materiel)</li>
          <ul>
            <li>Tableau liste stock</li>
            <li>Tableau liste categorie</li>
            <li>Tableau liste materiel</li>
            <ul>
              <li>See Details</li>
            </ul>
          </ul>
        <h5>Back End</h5>
          <li>index.js</li>
          <li>app.get('/getStock')</li>
          <li>app.get('/getCategory')</li>
          <li>app.get('/getMaterial')</li>

<h2>NB: This list is still is likely to change and be updated</h2>
