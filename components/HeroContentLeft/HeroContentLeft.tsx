import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero} id="experience">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Jared Long</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Wow what a cool guy who has done so much
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Hire him
        </Button>
      </Container>
    </div>
  );
}