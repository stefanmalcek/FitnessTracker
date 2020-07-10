import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Injectable()
export class LangService {
    private language = null;

    languages: string[] = [ 'en', 'sk' ];

    onLanguageChange = new EventEmitter<string>();

    get currentLanguage() {
        return this.language;
    }

    set currentLanguage(value: string) {
        this.language = value;

        this.translateService.setDefaultLang(this.language);
        this.translateService.use(this.language);

        localStorage.setItem('language', this.language);

        this.onLanguageChange.emit(this.language);
    }

    constructor(private translateService: TranslateService) {
        this.language = this.loadLanguage();

        this.translateService.addLangs(this.languages);

        setTimeout(() => {
            this.translateService.use(this.language);
        }, 0);
    }

    private loadLanguage(): string {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        return savedLang;
      }
      /*const browserLang = this.translateService.getBrowserLang();
      if (browserLang.match(/en|sk/)) {
        return browserLang;
      }*/
      return environment.defaultLanguage;
    }
}
