import { Fragment } from 'react';
import { Editor } from '@bytemd/react';
import style from './index.module.scss';

import highlight from '@bytemd/plugin-highlight';
import gfm from '@bytemd/plugin-gfm';
import breaks from '@bytemd/plugin-breaks'
import footnotes from '@bytemd/plugin-footnotes'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import math from '@bytemd/plugin-math'
import mermaid from '@bytemd/plugin-mermaid'
import mediumZoom from '@bytemd/plugin-medium-zoom'

import { uploadImages } from '../../../services/file'

const plugins = [
  breaks(),
  footnotes(),
  frontmatter(),
  gemoji(),
  gfm(),
  highlight(),
  math(),
  mermaid(),
  mediumZoom()
];

export default function PostEditor({ content, onChange }) {
  return (
    <Fragment>
      <Editor 
        value={content} 
        onChange={onChange}
        plugins={plugins} 
        uploadImages={uploadImages}
      />
    </Fragment>
  );
}
