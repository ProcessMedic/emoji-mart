import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, color } from '@storybook/addon-knobs';

import { Picker, Emoji } from '../src';
import '../css/emoji-mart.css';

const SETS = ['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']

storiesOf('Picker', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Picker
      onClick={action('clicked')}
      native={boolean('Unicode', true)}
      set={select('Emoji pack', SETS, SETS[0])}
      emojiSize={number('Emoji size', 24)}
      perLine={number('Per line', 9)}
      title={text('Idle text', 'Your Title Here')}
      emoji={text('Idle emoji', 'department_store')}
      skin={number('Skin tone', 1)}
      color={color('Highlight color', '#ae65c5')}
    />
  ));

storiesOf('Emoji', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Emoji
      native={boolean('Unicode', true)}
      set={select('Emoji pack', SETS, SETS[0])}
      emoji={text('Emoji', '+1')}
      size={number('Emoji size', 64)}
      skin={number('Skin tone', 1)}
    />
  ));
