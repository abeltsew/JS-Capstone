/**
 * @jest-environment jsdom
 */

import updateCommentCount from '../src/modules/updateCommentCount.js';

describe('Should render the exact comments count', () => {
  it('Should render one comment in the list', () => {
    const comment = [{ comment: 'Nice' }];
    const commentsHeader = document.createElement('h2');
    updateCommentCount(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('comments (1)');
  });

  it('Should render two comment in the list', () => {
    const comment = [{ comment: 'Nice' }, { comment: 'cool' }];
    const commentsHeader = document.createElement('h2');
    updateCommentCount(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('comments (2)');
  });

  it('Should render one comment in the list if the comment is empty', () => {
    const comment = [];
    const commentsHeader = document.createElement('h2');
    updateCommentCount(comment, commentsHeader, true);

    expect(commentsHeader.innerHTML).toEqual('comments (1)');
  });
});
