import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthentificationServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Extrait le token de l'URL
    const token = this.route.snapshot.queryParams['token'];

    // Stocke le token dans le localStorage
    localStorage.setItem('userToken', token);

    // Appelle le service pour finaliser la vérification
    this.authService.verifyEmail(token).subscribe(
      () => {
        console.log('Vérification effectuée!');
      },
      (error) => {
        // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
        console.error('Erreur lors de la vérification:', error);
      }
    );
    // Redirection vers la page de thèmes après un délai de 3 secondes
    setTimeout(() => {
      this.router.navigate(['/connexion']);
    }, 3000);
  }
}
