import { Component } from '@angular/core';

@Component({
  selector: 'block-template',
  template: `
    <div class="container_block">
      <p>Cargando...</p>
    </div>
  `,
  styles: [
    `
      .container_block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
      }
      .container_block img {
        width: 400px;

        animation-name: animateLogo;
        animation-iteration-count: infinite;
        animation-duration: 2.2s;
        animation-direction: alternate;
        animation-timing-function: linear;
      }
      @keyframes animateLogo {
        0% {
          transform: scale(1);
        }
        25% {
          transform: scale(1.3);
        }
        50% {
          transform: scale(1);
        }
        75% {
          transform: scale(0.7);
        }
        100% {
          transform: scale(1);
        }
      }
      .container_block p {
        color: #333333;
        font-size: 1.3rem;
        margin-top: 15px;
      }
    `,
  ],
})
export class BlockTemplateComponent {}
