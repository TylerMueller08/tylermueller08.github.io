import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import { Avatar, Title } from '@mantine/core';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="90%" className={classes.inner}>
        <Group className={classes.logoContainer}>
            <Avatar src="src/assets/Logo.png" alt="Logo" size={40}/>
            <Title order={3}>Tyler Mueller</Title>
        </Group>
        <Group gap={5} visibleFrom="xs">{items}</Group>
        <Burger opened={opened} onClick={toggle} color="white" hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}