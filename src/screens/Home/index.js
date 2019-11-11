import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { getMoviesByYear } from '../../lib/restAPI';
import { styles } from './styles'
import Input from '../../components/Input'

const Body = props => {
  return props.loading ? <Loading /> : <Content movies={props.movies} />
}

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={50} />
    </View>
  );
}

const Content = props => {
  let list = null;

  if (props.movies.total !== undefined) {
    list = (
      <>
        <ContentTitle total={props.movies.total} />
        <List movies={props.movies} />
      </>
    );
  }

  return list;
}

const ContentTitle = props => {
  return (
    <>
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>
          Overall Total
        </Text>

        <Text style={styles.itemTitleText}>
          {props.total}
        </Text>
      </View>
    </>
  );
}

const List = props => {
  const ListTitle = () => {
    return (
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>
          Year
        </Text>

        <Text style={styles.itemTitleText}>
          Total
        </Text>
      </View>
    );
  }

  const ListContent = () => {
    return (
      <ScrollView contentContainerStyle={styles.list}>
        {props.movies.moviesByYear.map((movie, i) => {
          return (
            <View key={String(i)} style={styles.movieItem}>
              <Text>
                {movie.year}
              </Text>

              <Text>
                {movie.movies}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }

  return (
    <>
      {props.movies.total > 0 ? <ListTitle /> : null}
      <ListContent />
    </>
  );
}

const SearchButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>
        Search
      </Text>
    </TouchableOpacity>
  )
}

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        Movies by year
      </Text>
    </View>
  );
}

const Home = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const onChangeText = value => {
    setText(value);
  }

  const onPressButton = async () => {
    setMovies({})
    setLoading(true);
    setMovies(await getMoviesByYear(text));
    setLoading(false);
  }

  return (
    <View style={styles.mainContainer}>
      <Title />

      <Input
        inputStyle={styles.inputStyle}
        noAutoFocus
        value={text}
        placeholder='movie name'
        onChangeText={onChangeText}
      />

      <SearchButton onPress={onPressButton} />

      <Body loading={loading} movies={movies} />
    </View>
  );
};

export default Home;