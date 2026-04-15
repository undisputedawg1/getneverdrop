const footerCols = [
  { heading: "Product", links: ["Features", "Pricing", "Demo"] },
  { heading: "Company", links: ["About", "Blog", "Contact"] },
  { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const Footer = () => (
  <footer className="bg-foreground text-muted-foreground py-12 md:py-16">
    <div className="container">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        <div>
          <h3 className="font-heading text-lg text-background mb-2">VoiceAI</h3>
          <p className="text-sm">Your 24/7 AI locksmith assistant.</p>
        </div>
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h4 className="font-semibold text-background text-sm mb-3">{col.heading}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-background transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-muted-foreground/20 pt-8 text-center text-xs">
        © 2026 VoiceAI. All rights reserved. Serving locksmith businesses worldwide.
      </div>
    </div>
  </footer>
);

export default Footer;
