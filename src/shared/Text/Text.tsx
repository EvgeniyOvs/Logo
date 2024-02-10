import React from 'react';
import styles from './text.module.scss';
import classNames from 'classnames';



type TSizes = 40 | 38 | 36 | 29 | 26 | 22 | 20 | 19  | 18  | 16 | 15 |14 | 13 ;
type FWeight = 700 | 400 ;
export enum Ecolor {
  black = 'black',
  white = 'white',
  grey = 'grey',
  whiteFF = 'whiteFF',
  green = 'green',
  green0D = 'green0D'
}
interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' ;
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  dekstopSize?: TSizes;
  color?: Ecolor;
  weight?: FWeight;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        color = Ecolor.black,
        weight = '400',
        children,
        size,
        mobileSize,
        dekstopSize,
        } = props;

    const classes = classNames(
        styles[`s${size}`],
        styles[`w${weight}`],
        styles[color],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`d${dekstopSize}`]]: dekstopSize },
    );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
