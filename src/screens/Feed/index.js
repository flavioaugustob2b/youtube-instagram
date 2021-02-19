import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import options from '../../../assets/image/options.png';
import like from '../../../assets/image/like.png';
import comment from '../../../assets/image/comment.png';
import send from '../../../assets/image/send.png';
import save from '../../../assets/image/save.png';

function Feed() {

    const post = [
        {
            id: '1',
            author: 'flavio-augusto',
            likes: 1200,
            pictureUrl:
            'https://shifter.sapo.pt/wp-content/uploads/2019/10/Joker-2-Warner-Bros.jpg',
            description: 'Novo filme em cartaz',
            hashtags: '#Cinema #Filmes',
            place: 'Fime Joker'
        },
        {
            id: '2',
            author: 'Miguel Augusto Farias Lima',
            likes: 700,
            pictureUrl:
            'https://super.abril.com.br/wp-content/uploads/2016/12/nananananabatman.jpg?quality=70&strip=all',
            description: 'Novo filme em cartaz',
            hashtags: '#Cinema #Filmes',
            place: 'Filme Batman'
        },
        {
            id: '3',
            author: 'Vanessa Lima',
            likes: 3900,
            pictureUrl:
            'https://cinema10.com.br/upload/noticias/2019-2/4144d07d8f.jpeg',
            description: 'Novo filme em cartaz',
            hashtags: '#Cinema #Filmes',
            place: 'Fime Superman'
        },
        {
            id: '4',
            author: 'Pedro',
            likes: 3900,
            pictureUrl:
            'https://www.correiodopovo.com.br/image/policy:3.115548:1543508015/338901.JPG?f=2x1&$p$f=ebcf263&w=720&$w=3b33d2d',
            description: 'Novo filme em cartaz',
            hashtags: '#Cinema #Filmes',
            place: 'Filme Cavaleiros'
        },
        {
            id: '5',
            author: 'Carlos',
            likes: 3900,
            pictureUrl:
            'https://cdn.pixabay.com/photo/2021/02/06/14/24/lavanttal-5988332__340.jpg',
            description: 'Novo filme em cartaz',
            hashtags: '#Cinema #Filmes',
            place: 'Cinema do Shopping'
        }
    ];

    function renderItem({ item: post }) {
        return (
            <View style={styles.post}>

                <View style={styles.postHeader}>
                    <View style= {styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image
                            source={options}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image
                    style={styles.pictureUrl}
                    source={{ uri: post.pictureUrl }}
                    />
                </View>

                <View style={styles.footer}>

                    <View style={styles.actions}>
                        <View style={styles.leftAction}>
                            <TouchableOpacity style={styles.action}>
                                <Image
                                source={like}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image
                                source={comment}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                source={send}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={save}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.hashtags}>{post.hashtags} </Text>
                        <Text style={styles.description}>{post.description} </Text>
                    </View>

                </View>

            </View>
        );
    }

    return (
        <View>
            <FlatList
            data={post}
            keyExtractor={(item) => item.id }
            renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 15,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    postOptions: {},
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 15,
        color: '#666'
    },
    pictureUrl: {
        width: '100%',
        height: 400
    },
    footer: {
        paddingHorizontal: 15,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    action: {
        marginRight: 8,
    },
    leftAction: {
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 14
    },
    hashtags: {
        color: '#002D5E',
    },
    description: {
        color: '#000',
        lineHeight: 18
    }
});

export default Feed;