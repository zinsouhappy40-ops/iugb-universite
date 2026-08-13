const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const menuLabel = document.querySelector('[data-menu-label]');
const menuBackground = document.querySelectorAll('.skip-link, .topline, main, footer, .floating-whatsapp');
let menuWasOpenedBy = null;

function setMenuBackgroundInert(isInert) {
  menuBackground.forEach((element) => { element.inert = isInert; });
}

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  setMenuBackgroundInert(false);
  if (menuLabel) menuLabel.textContent = 'Ouvrir le menu';
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  setMenuBackgroundInert(!isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? 'Ouvrir le menu' : 'Fermer le menu';
  if (!isOpen) {
    menuWasOpenedBy = menuButton;
    navigation.querySelector('a')?.focus();
  }
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  const menuIsOpen = navigation?.classList.contains('is-open');
  if (event.key === 'Escape' && menuIsOpen) {
    closeMenu();
    menuWasOpenedBy?.focus();
  }
  if (event.key === 'Tab' && menuIsOpen) {
    const focusable = [menuButton, ...navigation.querySelectorAll('a')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

const audienceCopy = {
  student: {
    titleMain: 'Ton BAC ouvre la porte.',
    titleAccent: 'Nous t’aidons à franchir le pas.',
    offer: 'sur ta formation',
    lead: 'Choisis une formation concrète, reconnue et adaptée à ton projet professionnel.',
    note: 'L’offre t’aide à démarrer tes études supérieures.',
    programmes: 'Du premier diplôme à la spécialisation, compare les parcours qui correspondent à ton projet.',
    reasons: 'Étudier avec un cap. Avancer avec confiance.',
    reasonsCopy: "À l'IUGB, tu associes exigence académique, pratique professionnelle et suivi de proximité.",
    formTitle: 'Prépare ton échange avec les admissions.',
    formCopy: 'Renseigne ton projet pour obtenir des informations adaptées à ton profil.',
    profile: 'Nouveau bachelier'
  },
  continuing: {
    titleMain: 'Votre parcours continue.',
    titleAccent: 'Donnez-lui une nouvelle ambition.',
    offer: 'sur votre poursuite d’études',
    lead: 'Rejoignez une Licence ou un Master professionnel adapté à votre prochain objectif.',
    note: 'L’offre accompagne votre passage en Licence ou en Master.',
    programmes: 'Comparez les Licences et Masters professionnels selon votre niveau et votre projet.',
    reasons: 'Poursuivre avec un cap. Se spécialiser avec confiance.',
    reasonsCopy: "L'IUGB associe spécialisation, pratique professionnelle et accompagnement de proximité.",
    formTitle: 'Préparez votre poursuite d’études.',
    formCopy: 'Indiquez votre niveau et la formation envisagée pour recevoir des informations adaptées.',
    profile: 'Étudiant en poursuite d’études'
  },
  professional: {
    titleMain: 'Votre expérience compte.',
    titleAccent: 'Faites évoluer vos compétences.',
    offer: 'sur votre formation',
    lead: 'Choisissez une formation courte, une spécialisation ou un parcours en langues compatible avec vos ambitions.',
    note: 'L’offre soutient votre montée en compétences.',
    programmes: 'Explorez les formations professionnelles, les Masters et les parcours en langues.',
    reasons: 'Se former aujourd’hui. Progresser durablement.',
    reasonsCopy: "Des enseignements pratiques et des formats adaptés pour développer des compétences utiles sur le terrain.",
    formTitle: 'Présentez votre objectif professionnel.',
    formCopy: 'Indiquez la compétence ou la spécialisation recherchée pour préparer votre échange.',
    profile: 'Professionnel'
  },
  parent: {
    titleMain: 'Son BAC ouvre la porte.',
    titleAccent: 'Nous vous aidons à préparer la suite.',
    offer: 'sur sa formation',
    lead: 'Offrez-lui un cadre sérieux, un suivi de proximité et une formation tournée vers l’emploi.',
    note: 'Accompagnez son choix et découvrez les conditions de l’offre.',
    programmes: "Comparez les niveaux, les durées et les domaines pour accompagner son choix avec des repères concrets.",
    reasons: 'Un cadre sérieux pour construire son avenir.',
    reasonsCopy: "Reconnaissance des diplômes, encadrement et professionnalisation : les repères essentiels pour décider en confiance.",
    formTitle: 'Échangez sur le projet de votre enfant.',
    formCopy: "Indiquez la formation envisagée pour préparer un échange précis avec le service des admissions.",
    profile: 'Parent accompagnateur'
  }
};

const audienceLead = document.querySelector('[data-audience-lead]');
const audienceTitleMain = document.querySelector('[data-audience-title-main]');
const audienceTitleAccent = document.querySelector('[data-audience-title-accent]');
const audienceOffer = document.querySelector('[data-audience-offer]');
const audienceNote = document.querySelector('[data-audience-note]');
const audienceProgrammes = document.querySelector('[data-audience-programmes]');
const audienceReasons = document.querySelector('[data-audience-reasons]');
const audienceReasonsCopy = document.querySelector('[data-audience-reasons-copy]');
const audienceFormTitle = document.querySelector('[data-audience-form-title]');
const audienceFormCopy = document.querySelector('[data-audience-form-copy]');
const profileSelect = document.querySelector('#profile');

document.querySelectorAll('[data-audience]').forEach((button) => {
  button.addEventListener('click', () => {
    const audience = button.dataset.audience;
    document.querySelectorAll('[data-audience]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    audienceTitleMain.textContent = audienceCopy[audience].titleMain;
    audienceTitleAccent.textContent = audienceCopy[audience].titleAccent;
    audienceOffer.textContent = audienceCopy[audience].offer;
    audienceLead.textContent = audienceCopy[audience].lead;
    audienceNote.textContent = audienceCopy[audience].note;
    audienceProgrammes.textContent = audienceCopy[audience].programmes;
    audienceReasons.textContent = audienceCopy[audience].reasons;
    audienceReasonsCopy.textContent = audienceCopy[audience].reasonsCopy;
    audienceFormTitle.textContent = audienceCopy[audience].formTitle;
    audienceFormCopy.textContent = audienceCopy[audience].formCopy;
    if (profileSelect) profileSelect.value = audienceCopy[audience].profile;
  });
});

const programmeSelect = document.querySelector('#programme');
document.querySelectorAll('[data-programme]').forEach((button) => {
  button.addEventListener('click', () => {
    if (programmeSelect) programmeSelect.value = button.dataset.programme;
    document.querySelector('#preinscription')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => document.querySelector('#fullname')?.focus({ preventScroll: true }), 650);
  });
});

const form = document.querySelector('[data-lead-form]');
const status = document.querySelector('[data-form-status]');

function showError(field, message) {
  const error = document.querySelector(`[data-error-for="${field.name}"]`);
  field.setAttribute('aria-invalid', 'true');
  if (error) error.textContent = message;
}

function clearErrors() {
  form.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute('aria-invalid'));
  form.querySelectorAll('.field__error').forEach((error) => { error.textContent = ''; });
  status.textContent = '';
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  const data = new FormData(form);
  const fullname = String(data.get('fullname') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const profile = String(data.get('profile') || '');
  const programme = String(data.get('programme') || '');
  const consent = data.get('consent');
  let firstInvalid = null;

  if (fullname.length < 3) {
    firstInvalid ||= form.elements.fullname;
    showError(form.elements.fullname, 'Indiquez votre nom complet.');
  }
  const phoneDigits = phone.replace(/\D/g, '');
  if (!/^[+()\d\s.-]+$/.test(phone) || phoneDigits.length < 8 || phoneDigits.length > 15) {
    firstInvalid ||= form.elements.phone;
    showError(form.elements.phone, 'Indiquez un numéro de téléphone valide.');
  }
  if (!profile) {
    firstInvalid ||= form.elements.profile;
    showError(form.elements.profile, 'Sélectionnez votre profil.');
  }
  if (!programme) {
    firstInvalid ||= form.elements.programme;
    showError(form.elements.programme, 'Sélectionnez la formation qui vous intéresse.');
  }
  if (!consent) {
    firstInvalid ||= form.elements.consent;
    showError(form.elements.consent, 'Votre accord est nécessaire pour transmettre la demande.');
  }

  if (firstInvalid) {
    status.textContent = 'Vérifiez les informations signalées.';
    firstInvalid.focus();
    return;
  }

  const message = [
    'Bonjour IUGB, je souhaite obtenir des informations pour une préinscription.',
    '',
    `Nom : ${fullname}`,
    `Téléphone : ${phone}`,
    `Profil : ${profile}`,
    `Formation souhaitée : ${programme}`,
    '',
    'Merci de me communiquer les prochaines étapes.'
  ].join('\n');

  status.textContent = 'Votre message est prêt. Ouverture de WhatsApp…';
  window.open(`https://wa.me/22960609116?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
