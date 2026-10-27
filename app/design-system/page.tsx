import type { Metadata } from "next";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, FeatureTile, Stat } from "@/components/ui/surfaces";
import { TextAreaField, TextField } from "@/components/ui/form-field";
import { Container, Section, SectionHeader } from "@/components/layout/primitives";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colours = [
  ["background", "Page surface"],
  ["muted", "Quiet sections, fills"],
  ["card", "Cards"],
  ["foreground", "Primary text"],
  ["muted-foreground", "Secondary text"],
  ["primary", "Main actions"],
  ["primary-hover", "Main action, hover"],
  ["link", "Text links, accents"],
  ["tint", "Contact panel"],
  ["border", "Dividers (decorative)"],
  ["input", "Control boundaries"],
  ["ring", "Focus ring"],
  ["destructive", "Errors"],
  ["success", "Confirmations"],
  ["warning", "Cautions"],
] as const;

// Ratios computed with the WCAG relative luminance formula. Recheck when a token changes.
const contrast = [
  ["Text on background", "16.8", "AAA"],
  ["Secondary text on background", "5.1", "AA"],
  ["Secondary text on muted", "4.7", "AA"],
  ["Primary action text", "8.7", "AAA"],
  ["Link on background", "8.7", "AAA"],
  ["Inverse text on inverse background", "17.5", "AAA"],
  ["Inverse secondary text", "7.4", "AAA"],
  ["Inverse link", "9.3", "AAA"],
  ["Input boundary on background", "3.6", "3:1 required"],
  ["Error text on background", "6.6", "AA"],
] as const;

const type = [
  ["text-display", "Hero headline", "I build interfaces for the hardest conditions."],
  ["text-title-1", "Page title", "Designing better outcomes"],
  ["text-title-2", "Section title", "How I work"],
  ["text-title-3", "Card title", "Software systems engineering"],
  ["text-lead", "Section introduction", "Systems that stay clear to the people who use and maintain them."],
  ["text-body", "Body copy", "Simplicity is the discipline. The right action should be obvious."],
  ["text-small", "Supporting copy", "Used for card descriptions and form labels."],
  ["text-caption", "Smallest allowed", "Metadata and hints only."],
] as const;

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-6 border-t border-border py-12">
      <h2 id={id} className="text-title-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Documentation"
            title="Design system"
            description="Every token and component used on this site, rendered from the live styles."
          />
        </Container>
      </Section>

      <Container className="pb-24">
        <Block id="colour" title="Colour">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {colours.map(([token, use]) => (
              <li key={token} className="flex flex-col gap-2">
                <span
                  className="h-16 rounded-control border border-border"
                  style={{ backgroundColor: `var(--${token})` }}
                />
                <span className="text-small font-medium">{token}</span>
                <span className="text-caption text-muted-foreground">{use}</span>
              </li>
            ))}
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-small">
              <caption className="sr-only">Verified contrast ratios</caption>
              <thead className="text-muted-foreground">
                <tr>
                  <th scope="col" className="py-2 pr-4 font-medium">Pairing</th>
                  <th scope="col" className="py-2 pr-4 font-medium">Ratio</th>
                  <th scope="col" className="py-2 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {contrast.map(([pair, ratio, result]) => (
                  <tr key={pair} className="border-t border-border">
                    <th scope="row" className="py-2 pr-4 font-normal">{pair}</th>
                    <td className="py-2 pr-4 tabular-nums">{ratio}:1</td>
                    <td className="py-2">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        <Block id="type" title="Typography">
          <ul className="flex flex-col gap-6">
            {type.map(([cls, role, sample]) => (
              <li key={cls} className="flex flex-col gap-1">
                <p className="text-caption text-muted-foreground">
                  {cls}, {role}
                </p>
                <p className={cls}>{sample}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="buttons" title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">
              Tertiary <ArrowUpRight aria-hidden />
            </Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Sending</Button>
          </div>
          <Section tone="inverse" className="rounded-panel py-8">
            <Container className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </Container>
          </Section>
        </Block>

        <Block id="surfaces" title="Cards, tiles and stats">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <p className="text-small text-muted-foreground">Plain card on the page surface.</p>
            </Card>
            <FeatureTile icon={<Code2 />} title="Keep it simple">
              People should be able to focus on their goals rather than think about the product.
            </FeatureTile>
          </div>
          <dl className="grid grid-cols-3 gap-4">
            <Stat value="5+" label="Years of experience" />
            <Stat value="10+" label="Projects" />
            <Stat value="200+" label="Learners taught" />
          </dl>
        </Block>

        <Block id="forms" title="Form fields">
          <div className="grid max-w-reading gap-5">
            <TextField label="Email" type="email" autoComplete="email" hint="Used only to reply." />
            <TextField label="Subject" optional />
            <TextAreaField label="Message" error="Write a message of at least 20 characters." />
          </div>
        </Block>

        <Block id="motion" title="Motion">
          <ul className="grid gap-2 text-small sm:grid-cols-2">
            <li>Fast, 150ms: colour changes on hover and focus.</li>
            <li>Base, 250ms: press feedback, arrows, menus.</li>
            <li>Slow, 500ms: scroll reveal for media blocks.</li>
            <li>Hero, 800ms: one entrance sequence on the home page.</li>
          </ul>
          <p className="max-w-reading text-small text-muted-foreground">
            Every duration drops to near zero when the visitor asks for reduced motion.
          </p>
        </Block>
      </Container>
    </>
  );
}