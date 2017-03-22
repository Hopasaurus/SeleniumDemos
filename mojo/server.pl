#!/usr/bin/env perl
use Mojolicious::Lite;

plugin 'proxy';

get '/' => sub {
  my $c = shift;

  $c->redirect_to('index.html');
  #$c->render(text => 'Hello World!');
};

get '/items' => sub { shift->proxy_to('http://localhost:1080/items'); };

app->start;
