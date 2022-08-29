import React from 'react';
import { RowWithMargins } from '../layout';
import { Bleed, Cover, Text } from '@rainbow-me/design-system';
const DoubleChevron = () => (
  <Cover alignHorizontal="center" alignVertical="center">
    <RowWithMargins>
      <Text color="secondary60" weight="semibold">
        􀯻
      </Text>
      <Bleed left="6px">
        <Text color="secondary40" weight="semibold">
          􀯻
        </Text>
      </Bleed>
    </RowWithMargins>
  </Cover>
);

export default DoubleChevron;