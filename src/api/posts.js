import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }

// 일부 수정시에는 patch 를 사용 , 전체 수정시 put 으로 수정
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
