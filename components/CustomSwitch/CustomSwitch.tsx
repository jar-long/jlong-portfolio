import { Switch, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function CustomSwitch() {

  const { toggleColorScheme} = useMantineColorScheme();

  return (
    <Switch
      size="md"
      color="dark.4"
      label = "Change display mode"
      offLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-6)" />}
      onLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
      onChange={() => toggleColorScheme()}
    />
  );
}