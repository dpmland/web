// Copyright © 2022 Dpm Land. All Rights Reserved.

/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
