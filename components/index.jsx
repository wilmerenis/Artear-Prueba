import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, FlatList, SafeAreaView } from 'react-native'

/* OWN COMPONENTS */
import FooterList from './FooterList'
import QuestionCard from './QuestionCards'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

const Spinner = () => (
  <View style={[styles.container, styles.horizontal]} >
    <ActivityIndicator size ="small" color="#338fed"/>
  </View>
)

export default function InfinityScroll() {
  const [state, setState] = useState({ 
    page: 1,
    loading: true,
    dataSource: [],
  })

  useEffect(() => {
    _fetchData()
  }, [state.page])

  function _fetchData() {
    let path = `http://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/questions?page=${state.page}&limit=10`
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setState({ 
            ...state,
            loading: false,
            dataSource: state.page === 1 ? data : [...state.dataSource, ...data] 
          })
        }, 2000)
      })
      .catch((err) => {
        setState({ ...state, loading: false })
      })
  }

  function _handleLoadMore() {
    setState((prevState) => ({
      ...state,
      page: prevState.page + 1,
    }))
  }

  return(
    <FlatList
      data={state.dataSource}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
          <QuestionCard {...item} />
        </View>
      )}
      onEndReached={_handleLoadMore}
      initialNumToRender={10}
      onEndReachedThreshold={0.5}
      ListFooterComponent={FooterList}
    />
  )
} 