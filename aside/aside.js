class Aside extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		this.shadowRoot.innerHTML = `
        <style>
          body {
            margin: 0;
            font-family: "Arial", sans-serif;
            color: white;
            text-align: center;
          }
  
          .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
  
          .information {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
  
          .info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 5px;
          }
  
          .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
  
          .name {
            font-size: 25px;
            font-weight: bold;
            margin: 0 20px 5px 0;
          }
  
          .roles {
            gap: 10px;
            margin-top: 4px;
            display: flex;
            align-items: center;
          }
  
          .role {
            font-size: 15px;
            color: #c3c4c6;
          }
  
          .dot {
            width: 5px;
            height: 5px;
            background-color: #c3c4c6;
            border-radius: 50%;
            display: inline-block;
          }
  
          .intro {
            background-color: #fff;
            color: black;
            padding: 30px;
            margin: 20px auto;
            max-width: 300px;
            border-radius: 20px;
            font-size: 14px;
            line-height: 1.6;
          }
  
          .section-title {
            color: #f6c453;
            font-weight: bold;
            font-size: 25px;
            margin-top: 40px;
          }
  
          .tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 30px 0 20px 0;
            max-width: 300px;
          }
  
          .tag {
            background-color: white;
            color: black;
            padding: 8px 16px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 14px;
          }
  
          .socials {
            margin: 30px 0;
          }
  
          .line {
            width: 1px;
            height: 50px;
            background-color: white;
            margin: 25px auto;
          }
  
          .social-icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            max-width: 200px;
            margin: 0 auto;
          }
  
          .social-icons img {
            width: 30px;
            height: 30px;
            border-radius: 13px;
            background-color: white;
            padding: 14px;
          }
  
          .scroll-up {
            background-color: white;
            color: black;
            padding: 12px 24px;
            margin-top: 155px;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            width: fit-content;
            font-weight: bold;
            cursor: pointer;
            gap: 15px;
          }
        </style>
  
        <div class="profile">
          <div class="info">
            <img class="avatar" src="/aside/images/icon/avatar.svg" alt="avatar" />
            <div class="information">
              <p class="name">Mark Vassilevskiy</p>
              <div class="roles">
                <span class="role">Writer</span>
                <span class="dot"></span>
                <span class="role">Startuper</span>
                <span class="dot"></span>
                <span class="role">Designer</span>
              </div>
            </div>
          </div>
  
          <div class="intro">
            <span>
              Let me help you integrate into the “New World” and show you cool
              features that you may not know. I love to write about Programming,
              Productivity and Web 3.0
            </span>
          </div>
  
          <div class="section-title">TOP CATEGORIES</div>
          <div class="tags">
            <div class="tag">Coding</div>
            <div class="tag">NFT</div>
            <div class="tag">Web 3.0</div>
            <div class="tag">Crypto</div>
            <div class="tag">Design</div>
          </div>
  
          <div class="section-title">Me In Social</div>
          <div class="line"></div>
  
          <div class="social-icons">
            <img src="/aside/images/icon/twitter.svg" alt="twitter" />
            <img src="/aside/images/icon/tel.svg" alt="telegram" />
            <img src="/aside/images/icon/mail.svg" alt="mail" />
            <img src="/aside/images/icon/DEV.svg" alt="dev" />
            <img src="/aside/images/icon/facebook.svg" alt="facebook" />
            <img src="/aside/images/icon/Vector-6.svg" alt="hashnode" />
            <img src="/aside/images/icon/linkedin.svg" alt="linkedin" />
            <img src="/aside/images/icon/youtube.svg" alt="youtube" />
          </div>
  
          <div class="line"></div>
  
          <div class="scroll-up">
            <p>Take me up!</p>
            <img src="/aside/images/icon/up.svg" alt="scroll-up" />
          </div>
        </div>
      `;
	}
}

customElements.define("app-aside", Aside);
