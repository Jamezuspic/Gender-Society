// EDIT THIS FILE FIRST. Most of your content lives here.

export const site = {
  name: 'SafeSpaces PH',
  group: 'Gender & Society',
  members: 'Gasid, Ralph James G | Guatno, James Phillip',
}

export const navLinks = [
  { id: 'issue', label: 'The Issue' },
  { id: 'stats', label: 'Statistics' },
  { id: 'laws', label: 'Laws' },
  { id: 'myths', label: 'Myths' },
  { id: 'act', label: 'Take Action' },
  { id: 'refs', label: 'References' },
]

// value = number that counts up. ref = number of the source in `references` below.
export const stats = [
  { value: 60, unit: '%', text: 'of women surveyed in two Quezon City barangays said they had experienced sexual harassment in public places at least once in their lives (SWS survey for UN Women, 2016).', ref: 1 },
  { value: 88, unit: '%', text: 'of women aged 18 to 24 in that same survey had experienced sexual harassment at least once.', ref: 2 },
  { value: 34, unit: '%', text: 'of the women surveyed had experienced the worst forms, such as being groped or encountering men who exposed themselves.', ref: 3 },
  { value: 68, unit: '%', text: 'of girls and young women in the Philippines said they had experienced online harassment on social media (Plan International report, as cited by the Philippine Commission on Women).', ref: 1 },
]

export const laws = [
  { code: 'RA 11313', title: 'Safe Spaces Act', text: 'Penalizes gender-based sexual harassment in streets, public spaces, online, workplaces, and schools.' },
  { code: 'RA 9710', title: 'Magna Carta of Women', text: 'A comprehensive women’s human rights law that eliminates discrimination and promotes equality.' },
  { code: 'RA 9262', title: 'Anti-VAWC Act', text: 'Protects women and their children from physical, sexual, psychological, and economic abuse.' },
]

export const myths = [
  { myth: '“It’s just a compliment. Don’t take it seriously.”', fact: 'Unwanted attention that makes someone uncomfortable or unsafe is harassment, whatever the intent.' },
  { myth: '“Only women experience harassment.”', fact: 'Anyone can be targeted, including men and LGBTQIA+ people. The law protects everyone.' },
  { myth: '“Online harassment isn’t real harassment.”', fact: 'Online gender-based harassment is covered by the Safe Spaces Act and causes real harm.' },
]

export const actions = [
  ['Speak up safely.', 'Check on the person being harassed.'],
  ['Document.', 'Save screenshots, dates, and times.'],
  ['Report.', 'Use your school, workplace, barangay, or police desk.'],
  ['Educate.', 'Share this website with friends and family.'],
]

// Add real, verified citations. Numbers match the [1] [2] [3] tags in stats.
export const references = [
  { text: 'Philippine Commission on Women. (2021). 2021 18-Day Campaign to End Violence Against Women.', url: 'https://pcw.gov.ph/?p=19073' },
  { text: 'Rappler. (2016). [Paste the exact article title from the page].', url: 'https://www.rappler.com/?p=124993' },
  { text: 'Inquirer.net. (2016, March 12). QC survey shows extent of sexual harassment—and silence that follows.', url: 'https://newsinfo.inquirer.net/?p=773013' },
  { text: 'Republic Act No. 11313, Safe Spaces Act (2019).', url: 'https://www.digest.ph/laws/safe-spaces-act' },
  { text: 'Republic Act No. 9710, Magna Carta of Women (2009). [Add the Official Gazette or Lawphil link].', url: '' },
  { text: 'Republic Act No. 9262, Anti-VAWC Act (2004).', url: 'https://www.digest.ph/laws/anti-violence-against-women-and-their-children-act-of-2004' },
  { text: 'Manila Bulletin. (2019, July 15). Duterte signs law vs sexual harassment in public spaces, online venues.', url: 'https://mb.com.ph/2019/07/15/duterte-signs-law-vs-sexual-harassment-in-public-spaces-online-venues' },
]
